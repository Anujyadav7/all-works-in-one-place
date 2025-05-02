
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import ImageCard from '../components/ImageCard';
import VideoCard from '../components/VideoCard';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';
import TabSection from '../components/TabSection';

const Index = () => {
  // Array of Firebase links organized by section
  const firebaseLinks = {
    profile: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/my%20pics%2Fmy%20pic%201.jpg?alt=media&token=a7bd705b-9564-485f-ae0b-fbaa34d31e92",
    pwContent: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/kids%20content%20pw%2F4.png?alt=media&token=ab47d988-470b-4d81-8154-49830a231f5b",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/kids%20content%20pw%2F5.png?alt=media&token=e15cd935-2540-42a8-b014-87d3d6bf2269",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/kids%20content%20pw%2F6.png?alt=media&token=2f1c6c3a-23a9-49ac-98db-248d03b79223",
    ],
    travelPosters: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/travel%20posts%2F1.png?alt=media&token=13b72f25-59ac-4f5a-9256-8c44833667ab",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/travel%20posts%2F2.png?alt=media&token=07171de7-6fd6-4e3e-b674-799236a4a607",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/travel%20posts%2F3.png?alt=media&token=7ecd70f7-c6da-42af-8632-70544d06731b",
    ],
    instagramAds: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Instagram%20Ad%20shoot%2Fburger%20(1).png?alt=media&token=89918f6e-d7a0-4008-ab94-38888f4b26c9",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Instagram%20Ad%20shoot%2Ffacewash.png?alt=media&token=44d920bc-c4de-4d87-9da5-4861ecc39500",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Instagram%20Ad%20shoot%2Four%20sandwich%20(2).png?alt=media&token=6a76e948-3834-44a9-93f8-10c8b8621876",
    ],
    youtubeThumbnails: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Youtube%20thumbnail%2FMagnates%20Media%20Thumbnail%20V1.png?alt=media&token=7a5813c5-6590-431f-a253-ddb7ac55c22c",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Youtube%20thumbnail%2FMagnateMedia%20Thumbnail%20V3.png?alt=media&token=d6404b51-faef-43b3-a72a-41f36583bf8d",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Youtube%20thumbnail%2FCopy%20of%20Add%20a%20subheading.png?alt=media&token=776c2bad-4668-4d84-b3f1-c1621e19d7b2",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/Youtube%20thumbnail%2F6986.png?alt=media&token=608753dc-1b67-4f3a-bcd5-af9b7ab60a05",
    ],
    instagramReels: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/engaging%20instagram%20reel%2Fart%20of%20editing%20.mp4?alt=media&token=6db5954b-6c59-4a89-ae99-b5615913b1df",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/engaging%20instagram%20reel%2Fact%20like%20podcast%20.mp4?alt=media&token=b84fd9f5-8e31-40d0-b55a-a41247e773b1",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/engaging%20instagram%20reel%2Fenagaging%20insta%20reel%20.mp4?alt=media&token=064ffdc8-1d19-4fc8-8459-a2b62565b434",
    ],
    youtubeShorts: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/AI%20voices%20and%20topics%2F3d%20animated%20icions%20site%20.mp4?alt=media&token=0cc72774-e056-49cd-a133-931f695f469c",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/AI%20voices%20and%20topics%2Fadd%20for%20thumbnail%20.mp4?alt=media&token=07f925c2-09b4-46b6-a282-9206239faede",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/AI%20voices%20and%20topics%2Fcomplite%20video%20editing......mp4?alt=media&token=19af700d-8df2-4eb3-b861-9e5563a10699",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/AI%20voices%20and%20topics%2Fcontent%20lavrage%20.mp4?alt=media&token=c54d85f0-2441-49da-a1ec-63493c565d75",
    ],
    productSellVideos: [
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/some%20more%2Ffigma%20plug%20in%20.mp4?alt=media&token=16ee55cd-d21f-4f86-88eb-16d067935765",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/some%20more%2Frelight%20with%20ai%20.mp4?alt=media&token=da540554-d266-407a-b6e5-c8b7b742c902",
      "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21861.appspot.com/o/engaging%20instagram%20reel%2Fstock%20market%20reality%20.mp4?alt=media&token=73f0d1f2-8ddb-4eb4-8472-f37bda416986",
    ],
  };

  // Component to reveal elements on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <ScrollReveal>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Elevating Brands Through<br />
                  <span className="highlight-gradient">Creative Social Media</span>
                </h1>
                <p className="text-lg mb-8 text-foreground/80 max-w-lg">
                  I create engaging, strategic social media content that builds brand presence 
                  and drives audience growth across platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    Let's Collaborate <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#projects" className="btn-outline">
                    View My Work
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <ScrollReveal>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={firebaseLinks.profile}
                      alt="Social Media Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg">
                    <p className="text-lg font-display font-medium highlight-gradient">Social Media Manager</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section id="projects" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-title text-center">Showcase</h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Explore my diverse portfolio of social media projects, from personal branding to eye-catching promotional content.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <TabSection 
              tabs={[
                {
                  id: "pw-content",
                  label: "Personal Branding",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.pwContent.map((src, idx) => (
                        <ImageCard 
                          key={idx} 
                          src={src} 
                          alt={`Personal Branding ${idx + 1}`}
                          title={`Personal Branding ${idx + 1}`}
                          description="Content designed for personal brand presence"
                        />
                      ))}
                    </div>
                  )
                },
                {
                  id: "travel",
                  label: "Travel Posters",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.travelPosters.map((src, idx) => (
                        <ImageCard 
                          key={idx} 
                          src={src}
                          alt={`Travel Poster ${idx + 1}`}
                          title={`Travel Poster ${idx + 1}`}
                          description="Destination promotional content"
                        />
                      ))}
                    </div>
                  )
                },
                {
                  id: "instagram-ads",
                  label: "Instagram Ad Suite",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.instagramAds.map((src, idx) => (
                        <ImageCard 
                          key={idx} 
                          src={src} 
                          alt={`Instagram Ad ${idx + 1}`}
                          title={`Instagram Ad ${idx + 1}`}
                          description="Paid promotional content"
                        />
                      ))}
                    </div>
                  )
                },
                {
                  id: "youtube-thumbnails",
                  label: "YouTube Thumbnails",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {firebaseLinks.youtubeThumbnails.map((src, idx) => (
                        <ImageCard 
                          key={idx} 
                          src={src} 
                          alt={`YouTube Thumbnail ${idx + 1}`}
                          title={`YouTube Thumbnail ${idx + 1}`}
                          description="High-CTR thumbnail design"
                        />
                      ))}
                    </div>
                  )
                }
              ]} 
            />
          </ScrollReveal>
        </div>
      </section>
      
      {/* Video Edits Section */}
      <section id="videos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="section-title text-center">Video Edits</h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Motion graphics, edits, and video content to engage audiences across platforms.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <TabSection 
              tabs={[
                {
                  id: "instagram-reels",
                  label: "Instagram Reels",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.instagramReels.map((src, idx) => (
                        <VideoCard 
                          key={idx} 
                          src={src} 
                          title={`Engaging Instagram Reel ${idx + 1}`} 
                        />
                      ))}
                    </div>
                  )
                },
                {
                  id: "youtube-shorts",
                  label: "YouTube Shorts",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.youtubeShorts.map((src, idx) => (
                        <VideoCard 
                          key={idx} 
                          src={src} 
                          title={`YouTube Short ${idx + 1}`} 
                        />
                      ))}
                    </div>
                  )
                },
                {
                  id: "product-videos",
                  label: "Product Videos",
                  content: (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {firebaseLinks.productSellVideos.map((src, idx) => (
                        <VideoCard 
                          key={idx} 
                          src={src}
                          title={`Product Video ${idx + 1}`} 
                        />
                      ))}
                    </div>
                  )
                }
              ]} 
            />
          </ScrollReveal>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <ScrollReveal>
                <h2 className="section-title">About Me</h2>
                <p className="mb-6 text-foreground/80 leading-relaxed">
                  I'm a passionate Social Media Manager with over 5 years of experience crafting engaging content that resonates with audiences and drives measurable results. My approach combines creative storytelling with strategic thinking and data-driven decisions.
                </p>
                <p className="mb-6 text-foreground/80 leading-relaxed">
                  Having worked across various industries, I understand the unique challenges and opportunities each brand faces in the digital landscape. I specialize in developing cohesive visual identities and content strategies that strengthen brand recognition and foster community growth.
                </p>
                
                <h3 className="text-xl font-medium mb-4 mt-8">My Skillset</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Content Creation</div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Video Editing</div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Analytics</div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Brand Development</div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Community Management</div>
                  <div className="bg-secondary/30 rounded-lg p-3 text-center">Campaign Strategy</div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="md:w-1/2">
              <ScrollReveal>
                <div className="bg-secondary/20 rounded-xl p-6 mb-8">
                  <h3 className="subheading">Client Testimonials</h3>
                  
                  <div className="space-y-6 mt-4">
                    <div className="bg-background rounded-lg p-4 border border-border/50">
                      <p className="italic text-foreground/80 mb-3">
                        "Working with this social media manager transformed our online presence completely. The engagement on our posts increased by 300% in just two months!"
                      </p>
                      <p className="font-medium">— Sarah J., Fashion Brand Owner</p>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border border-border/50">
                      <p className="italic text-foreground/80 mb-3">
                        "The video content created for our product launch was exceptional. We saw conversion rates double from our social campaigns. Highly recommended!"
                      </p>
                      <p className="font-medium">— Michael T., Tech Startup Founder</p>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border border-border/50">
                      <p className="italic text-foreground/80 mb-3">
                        "A true professional who understands both the creative and analytical sides of social media management. Our Instagram following grew from 5K to 50K in one year!"
                      </p>
                      <p className="font-medium">— Elena R., Lifestyle Influencer</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <ScrollReveal>
                <h2 className="section-title">Let's Connect</h2>
                <p className="mb-6 text-foreground/80">
                  Ready to elevate your social media presence? I'd love to hear about your brand and discuss how we can work together to achieve your goals.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>contact@smmanager.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-4">Follow Me</h3>
                  <SocialLinks />
                </div>
              </ScrollReveal>
            </div>
            
            <div className="md:w-1/2">
              <ScrollReveal>
                <div className="bg-secondary/20 rounded-xl p-6">
                  <h3 className="subheading">Send Me a Message</h3>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
