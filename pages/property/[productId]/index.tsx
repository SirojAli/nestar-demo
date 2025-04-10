import {useRouter} from "next/router"; // useRouter - hook

const PropertyDetail = () => {
  const router = useRouter();
  // useRouter dan router yasab olamiz

  const { productId } = router.query;
  // productId ni distraction qivolamiz
  
  return <div>PROPERTY DETAIL: {productId} </div>
  // bu productID ham paramda, ham tepada(URL)da 1xil bb ko'rinadi
};

export default PropertyDetail;
