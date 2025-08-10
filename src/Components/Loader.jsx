import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#fbbf24"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
