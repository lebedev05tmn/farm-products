import PageWrapper from "../../layout/page-wrapper/page-wrapper";
import MainHome from "../../layout/main/main-home";

export default function HomePage() {
  return <PageWrapper children={<MainHome />} isHome={true} />;
}
