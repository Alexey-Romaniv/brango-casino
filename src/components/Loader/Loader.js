import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader_box">
      <Image
        className="loader"
        src="/images/spinner.svg"
        alt="spinner"
        loading="lazy"
        width={60}
        height={60}
      />
    </div>
  );
}
