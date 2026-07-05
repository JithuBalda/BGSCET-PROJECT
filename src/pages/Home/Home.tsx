// import CampusPlacements from '../../components/CampusPlacements/CampusPlacements';
// import Footer from '../../components/footer/Footer';
// import MainHeader from '../../components/header/MainHeader';
// import MainNavbar from '../../components/header/MainNavbar';
// import TopAnnouncementBar from '../../components/header/TopAnnouncementBar';
// import HomeAboutMutt from '../../components/HomeAboutMutt/HomeAboutMutt';
// import HomeAboutUniversity from '../../components/HomeAboutUniversity/HomeAboutUniversity';
// import HomeHeroCarousel from '../../components/HomeHeroCarousel/HomeHeroCarousel';
// import HomeStatistics from '../../components/HomeStatistics/HomeStatistics';
// import HomeVisionMission from '../../components/HomeVisionMission/HomeVisionMission';

// import StudentTestimonials from '../../components/StudentTestimonials/StudentTestimonials';
// import VisitCampus from '../../components/VisitCampus/VisitCampus';

// function Home() {
//   return (
//     <div className="site-shell">
//       <TopAnnouncementBar />
//       <MainHeader />
//       <MainNavbar />
//       <main>
//         <HomeHeroCarousel />
//         <HomeAboutUniversity />
//         <HomeStatistics />
//         <HomeAboutMutt />
//         <HomeVisionMission />
//         <CampusPlacements />
//         <StudentTestimonials />
//         <VisitCampus />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;



import CampusPlacements from '../../components/CampusPlacements/CampusPlacements';
import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import MainNavbar from '../../components/header/MainNavbar';
import TopAnnouncementBar from '../../components/header/TopAnnouncementBar';

import HomeAboutMutt from '../../components/HomeAboutMutt/HomeAboutMutt';
import HomeAboutUniversity from '../../components/HomeAboutUniversity/HomeAboutUniversity';
import HomeHeroCarousel from '../../components/HomeHeroCarousel/HomeHeroCarousel';
import HomeStatistics from '../../components/HomeStatistics/HomeStatistics';
import HomeVisionMission from '../../components/HomeVisionMission/HomeVisionMission';

import HomeAcademicPrograms from '../../components/HomeAcademicPrograms/HomeAcademicPrograms';
import HomePastEvents from '../../components/HomePastEvents/HomePastEvents';
import HomeNewsAnnouncements from '../../components/HomeNewsAnnouncements/HomeNewsAnnouncements';
import HomeCampusLife from '../../components/HomeCampusLife/HomeCampusLife';

import StudentTestimonials from '../../components/StudentTestimonials/StudentTestimonials';
import VisitCampus from '../../components/VisitCampus/VisitCampus';

function Home() {
  return (
    <div className="site-shell">
      <TopAnnouncementBar />

      <MainHeader />

      <MainNavbar />

      <main>
        <HomeHeroCarousel />

        <HomeAboutUniversity />

        <HomeStatistics />

        <HomeAboutMutt />

        <HomeVisionMission />

        <HomeAcademicPrograms />

        <HomePastEvents />

        <HomeNewsAnnouncements />

        <HomeCampusLife />

        <CampusPlacements />

        <StudentTestimonials />

        <VisitCampus />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
