import { URL_SOCKET } from "@/constant";
import useSocketCommon from "@/socket/SocketCommon";

const About = () => {
  const { socketData } = useSocketCommon({ url: URL_SOCKET });
  console.log("🚀 ~ About ~ socketData:", socketData)

  return (
    <div className="m-[120px] ">
      {socketData ? (
        <>
          <p>s: {socketData.s}</p>
          <p>A: {socketData.A} USD</p>
          <p>B: {socketData.B} USD</p>
          <p>C: {socketData.C} USD</p>
          <p>E: {socketData.E} USD</p>
          <p>F: {socketData.F} USD</p>
          <p>L: {socketData.L} USD</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
