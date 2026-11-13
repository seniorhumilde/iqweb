import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLegacy from './components/AboutLegacy';
import ImpactStats from './components/ImpactStats';
import ServicesTabbedDark from './components/ServicesTabbedDark';
import ProjectsRegional from './components/ProjectsRegional';
import NewsBlogSection from './components/NewsBlogSection';
import QualityHSE from './components/QualityHSE';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import SectionNavigator from './components/SectionNavigator';
import BlogAdminModal from './components/BlogAdminModal';
import { useBlogPosts } from './hooks/useBlogPosts';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [presetMessage, setPresetMessage] = useState('');
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const { posts, addPost, updatePost, deletePost, setFeaturedPost, resetPosts } =
    useBlogPosts();

  const handleSelectService = (serviceTitle, customMessage = '') => {
    setSelectedService(serviceTitle);
    setPresetMessage(customMessage);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestPostCta = (post) => {
    const msg = `Solicito información sobre: ${post.title}`;
    handleSelectService(post.relatedService || '', msg);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f1f38]">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <AboutLegacy />
        <ImpactStats variant="light" />
        <ServicesTabbedDark onSelectService={(srv) => handleSelectService(srv, '')} />
        <ProjectsRegional />
        <NewsBlogSection
          variant="executive"
          posts={posts}
          onOpenAdmin={() => setAdminModalOpen(true)}
          onRequestPostCta={handleRequestPostCta}
        />
        <QualityHSE />
        <ContactSection
          variant="executive"
          preselectedService={selectedService}
          presetMessage={presetMessage}
        />
        <LocationSection variant="executive" />
      </main>

      <Footer />

      <SectionNavigator hidden={adminModalOpen} />

      <BlogAdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        posts={posts}
        onAdd={addPost}
        onUpdate={updatePost}
        onDelete={deletePost}
        onSetFeatured={setFeaturedPost}
        onReset={resetPosts}
      />
    </div>
  );
}
