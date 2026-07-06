
import MainHeader from '../components/header/MainHeader';
import MainNavbar from '../components/header/MainNavbar';


import BannerSection from '../components/BannerSection/BannerSection';
import AboutMutt from '../components/AboutMutt/AboutMutt';
import Statistics from '../components/Statistics/Statistics';
import GuruSection from '../components/GuruSection/GuruSection';
import CampusPlacements from '../components/CampusPlacements/CampusPlacements';
import StudentTestimonials from '../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../components/VisitCampus/VisitCampus';
import  Footer from '../components/footer/Footer';

import AcademicEligibility from '../components/AcademicEligibility/AcademicEligibility';
import AdmissionSection from '../components/AdmissionSection/AdmissionSection';


function AboutPage() {
  return (
    <div className="about-page">
      <MainHeader />
      <MainNavbar />
      <AboutMutt />
      <BannerSection
        image="https://res.cloudinary.com/dxjzq6f0g/image/upload/v1697040913/BGSCET-PROJECT/Images/about-banner_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_kv7b5k.jpg"
        title="About BGSCET"
        whatsappLink="https://wa.me/919900000000"
      />
      <Statistics />
      <GuruSection />
      <AdmissionSection />
      <AcademicEligibility />
      <CampusPlacements />
      <StudentTestimonials />
      <VisitCampus />
      <Footer />

    </div>
  );
}

export default AboutPage;
