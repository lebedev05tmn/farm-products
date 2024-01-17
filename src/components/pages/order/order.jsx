import PageWrapper from "../../layout/page-wrapper/page-wrapper";
import MainOrder from "../../layout/main/main-order";

export default function OrderPage() {
  return <PageWrapper children={<MainOrder />} isHome={false} />;
}
