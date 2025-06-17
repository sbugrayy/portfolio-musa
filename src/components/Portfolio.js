import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaFilter } from 'react-icons/fa';

const PortfolioContainer = styled.section`
  padding: 4rem 0;
  width: 100%;
  background-color: var(--background-color);
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  text-align: center;
`;

const PortfolioGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

const Card = styled.div`
  background-color: var(--card-bg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
`;

const VideoCard = styled(Card)`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const VideoContent = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const VideoTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 200px;
  max-width: 200px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
    min-width: 100%;
    max-width: 100%;
  }
`;

const Tab = styled.button`
  padding: 1rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  text-align: left;
  white-space: nowrap;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ProjectsCard = styled(Card)`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectsContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const FilterLabel = styled.span`
  color: var(--text-color);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--primary-color);
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--background-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed) ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.span`
  font-size: 0.9rem;
  color: var(--primary-color);
`;

// Örnek veriler
const videos = [
  {
    id: 1,
    title: 'Stalin Ve Troçki Mücadelesi',
    url: 'https://www.youtube.com/embed/1Hzvit2xBtQ?si=lIgOYSR8KggOVOtW'
  },
  {
    id: 2,
    title: 'Büyük Moğol Genarali Subutay Hakkında Bilinmeyenler',
    url: 'https://www.youtube.com/embed/sNY8LafYKP8?si=KBU7b6UBG8HzzBvL'
  },
  {
    id: 3,
    title: 'Çini Felakete Sürükleyen Serçeler',
    url: 'https://www.youtube.com/embed/Y_2h0isoIhU?si=T2hhJcraYdTSxmuE'
  }
];

const projects = [
  {
    id: 1,
    title: 'Proje 1',
    category: 'Tarih',
    image: '/project1.jpg'
  },
  {
    id: 2,
    title: 'Proje 2',
    category: 'Deri İşleme',
    image: '/project2.jpg'
  },
  {
    id: 3,
    title: 'Proje 3',
    category: 'Tarih',
    image: '/project3.jpg'
  }
];

const categories = ['Tümü', 'Tarih', 'Deri İşleme'];

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredProjects = activeCategory === 'Tümü'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

      <PortfolioGrid>
        <VideoCard>
          <VideoContent>
            <VideoTabs>
              {videos.map(video => (
                <Tab
                  key={video.id}
                  active={activeVideo.id === video.id}
                  onClick={() => setActiveVideo(video)}
                >
                  {video.title}
                </Tab>
              ))}
            </VideoTabs>
            <VideoContainer>
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoContainer>
          </VideoContent>
        </VideoCard>

        <ProjectsCard>
          <ProjectsContent>
            <FilterContainer>
              <FilterLabel>
                <FaFilter />
                Kategoriler:
              </FilterLabel>
              {categories.map(category => (
                <FilterButton
                  key={category}
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterContainer>

            <ProjectsGrid>
              <AnimatePresence>
                {filteredProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectInfo>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectCategory>{project.category}</ProjectCategory>
                    </ProjectInfo>
                  </ProjectCard>
                ))}
              </AnimatePresence>
            </ProjectsGrid>
          </ProjectsContent>
        </ProjectsCard>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio; 