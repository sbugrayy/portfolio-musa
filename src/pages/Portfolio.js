import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useFirebase } from '../context/FirebaseContext';

const PortfolioContainer = styled.section`
  padding: 4rem 0;
  width: 100%;
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/portfolio.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
    z-index: -1;
    animation: backgroundFloat 32s ease-in-out infinite;
    
    @media (max-width: 768px) {
      opacity: 0.04;
      filter: blur(1px);
    }
  }

  @keyframes backgroundFloat {
    0%, 100% { 
      transform: scale(1) rotate(0deg); 
    }
    50% { 
      transform: scale(1.06) rotate(0.6deg); 
    }
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

/* Sekme container */
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const TabButton = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  font-size: 1rem;
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

/* Merkezi içerik konteynırı */
const CenteredContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

/* Video Grid */
const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoTitle = styled.h3`
  padding: 1rem;
  text-align: center;
  color: var(--text-color);
  margin: 0;
`;

/* Proje */
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.a)`
  position: relative;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  color: white;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 0 1rem;
  transition: opacity 0.3s ease;
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

/* galeri */
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  flex-direction: column;
  padding: 1rem;
`;

const DescriptionBox = styled.div`
  background: white;
  color: black;
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  text-align: center;
  margin-top: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

/* Örnek veriler */
const videos = [
  {
    id: 1,
    title: 'Stalin Ve Troçki',
    url: 'https://www.youtube.com/embed/1Hzvit2xBtQ?si=lIgOYSR8KggOVOtW'
  },
  {
    id: 2,
    title: 'Moğol Genarali Subutay',
    url: 'https://www.youtube.com/embed/sNY8LafYKP8?si=KBU7b6UBG8HzzBvL'
  },
  {
    id: 3,
    title: 'Çin ve Serçeler',
    url: 'https://www.youtube.com/embed/Y_2h0isoIhU?si=T2hhJcraYdTSxmuE'
  }
];

const projects = [
    { id: 1, title: 'Tez Çalışmam', image: '/project1.jpg', file: '/tez.docx' }
];

const galleryImages = [
    { id: 1, src: '/galeri/DeriCuzdan1.jpg', description: 'Deri Cüzdan' },
    { id: 2, src: '/galeri/DeriCuzdan12.jpg', description: 'Deri Cüzdan' },
    { id: 3, src: '/galeri/DeriCuzdan3.jpg', description: 'Deri Cüzdan' },
    { id: 4, src: '/galeri/DeriCuzdan4.jpg', description: 'Deri Cüzdan' },
    { id: 5, src: '/galeri/DeriCuzdan5.jpg', description: 'Deri Cüzdan' },
    { id: 6, src: '/galeri/DeriCuzdan6.jpg', description: 'Deri Cüzdan' },
    { id: 7, src: '/galeri/DeriCuzdan11.jpg', description: 'Deri Cüzdan' },
    { id: 8, src: '/galeri/DeriCuzdan8.jpg', description: 'Deri Cüzdan' },
    { id: 9, src: '/galeri/DeriCuzdan9.jpg', description: 'Deri Cüzdan' },
    { id: 10, src: '/galeri/DeriCuzdan10.jpg', description: 'Deri Cüzdan' },
    { id: 11, src: '/galeri/DeriCuzdan7.jpg', description: 'Deri Kalemlik' },
    { id: 12, src: '/galeri/DeriCuzdan2.jpg', description: 'Deri Kalemlik' },
    { id: 13, src: '/galeri/DeriKemer1.jpg', description: 'Deri Kemer' },
    { id: 14, src: '/galeri/DeriKemer2.jpg', description: 'Deri Kemer' },
    { id: 14, src: '/galeri/Calisma1.jpg', description: 'Çalışma' },
    { id: 15, src: '/galeri/Calisma2.jpg', description: 'Çalışma' },
    { id: 16, src: '/galeri/Calisma3.jpg', description: 'Çalışma' },
    { id: 17, src: '/galeri/Calisma4.jpg', description: 'Çalışma' },
];

const Portfolio = () => {
  const { data } = useFirebase();
  const portfolioData = data?.portfolio || {};
  
  const [activeSection, setActiveSection] = useState('Videolar');
  const [lightbox, setLightbox] = useState(null);
  
  // Firebase'den gelen verileri parse et
  const parseVideos = (videosString) => {
    if (!videosString) return videos;
    return videosString.split('\n').map((line, index) => {
      const [title, url] = line.split('|');
      return { id: index + 1, title: title.trim(), url: url.trim() };
    });
  };

  const parseProjects = (projectsString) => {
    if (!projectsString) return projects;
    return projectsString.split('\n').map((line, index) => {
      const [title, image, file] = line.split('|');
      return { id: index + 1, title: title.trim(), image: image.trim(), file: file.trim() };
    });
  };

  const parseGallery = (galleryString) => {
    if (!galleryString) return galleryImages;
    return galleryString.split('\n').map((line, index) => {
      const [description, src] = line.split('|');
      return { id: index + 1, description: description.trim(), src: src.trim() };
    });
  };

  const videosData = parseVideos(portfolioData.videos);
  const projectsData = parseProjects(portfolioData.projects);
  const galleryData = parseGallery(portfolioData.gallery);

  return (
      <PortfolioContainer>
        <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          Portfolyo
        </Title>

        <TabsContainer>
          {['Videolar', 'Projeler', 'galeri'].map(tab => (
              <TabButton
                  key={tab}
                  active={activeSection === tab}
                  onClick={() => setActiveSection(tab)}
              >
                {tab}
              </TabButton>
          ))}
        </TabsContainer>

        <AnimatePresence mode="wait">
          {activeSection === 'Videolar' && (
              <motion.div
                  key="videos"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                <CenteredContent>
                  <VideosGrid>
                    {videosData.map(video => (
                        <VideoContainer key={video.id}>
                          <VideoFrame>
                            <iframe
                                src={video.url}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                          </VideoFrame>
                          <VideoTitle>{video.title}</VideoTitle>
                        </VideoContainer>
                    ))}
                  </VideosGrid>
                </CenteredContent>
              </motion.div>
          )}

          {activeSection === 'Projeler' && (
              <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                <CenteredContent>
                  <ProjectsGrid>
                    <AnimatePresence>
                      {projectsData.map(project => (
                          <ProjectCard
                              key={project.id}
                              href={project.file}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.3 }}
                          >
                            <ProjectImage src={project.image} alt={project.title} />
                            <Overlay>{project.title}</Overlay>
                          </ProjectCard>
                      ))}
                    </AnimatePresence>
                  </ProjectsGrid>
                </CenteredContent>
              </motion.div>
          )}

          {activeSection === 'galeri' && (
              <motion.div
                  key="gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                <CenteredContent>
                  <GalleryGrid>
                    {galleryData.map(img => (
                        <GalleryImage
                            key={img.id}
                            src={img.src}
                            alt=""
                            onClick={() => setLightbox(img)}
                        />
                    ))}
                  </GalleryGrid>
                </CenteredContent>

                {lightbox && (
                    <LightboxOverlay>
                      <CloseButton onClick={() => setLightbox(null)}>
                        <FaTimes />
                      </CloseButton>
                      <GalleryImage
                          src={lightbox.src}
                          alt=""
                          style={{
                            maxWidth: '90%',
                            maxHeight: '80vh',
                            height: 'auto',
                            width: 'auto'
                          }}
                      />
                      <DescriptionBox>{lightbox.description}</DescriptionBox>
                    </LightboxOverlay>
                )}
              </motion.div>
          )}
        </AnimatePresence>
      </PortfolioContainer>
  );
};

export default Portfolio;