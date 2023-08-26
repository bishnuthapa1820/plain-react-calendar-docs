import logo from "../../assets/logo/logo.png";

// https://www.shopify.com/tools/logo-maker/my-logos :for logo design

export default function Hero() {
  return (
    <div className="flex justify-center">
      <img src={logo} alt="logo" className="w-full max-w-[600px] select-none" />
    </div>
  );
}
