import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";
import { GET_EPISODES, GET_EPISODE } from "../types";

const ProjectState = (props) => {
  const initialState = {
    episodes: [
      {
        list_id: 0,
        name: "Gorilla",
        role: "Vitalik",
        avatar_url: "/assets/images/wildcards.png",
        html_url: "https://wildcards.world/#ethturin-quadratic-voting",
        thread_url:
          "/orbitdb/zdpuAtcPsCirUAPeG5UBwqjhcgrvjhoqDxpcmqpr6paofkQD1/3box.thread.wildcards.VitalikGorilla",
        active: true,
        company_bio: "Vitalik",
        bio:
          "Original Gorilla. Vitalik is the first ever animal launched on wildcards and therefore often termed an OG (Original Gorilla). The wildcards project was born at the #ETHCapeTown hackathon in May 2019 where Vitalik Buterin was one of the judges. We named Vitalik the Gorilla after Vitalik as a testament to the impact and innovation Vitalik Buterin has had on the blockchain ecosystem. Vitalik, if you are reading this, start saving some animals and buy me! Funds raised by Vitalik, initially, will go to Wild Tomorrow Fund; however Vitalik doesn't represent a real gorilla, and funds for Vitalik may be distributed via another allocation mechanism in the future (DAO or otherwise).",
      },
      {
        list_id: 1,
        name: "Whale",
        role: "Griff",
        avatar_url: "/assets/images/comingsoon.png",
        html_url: "https://www.greatwhaleconservancy.org/",
        thread_url:
          "/orbitdb/zdpuAuPq9pzPGEs2ghBmznPcRsoTExjnVbVTqjrkg41wwt6Wo/3box.thread.wildcards.GriffWhale",
        active: false,
        company_bio: "Griff",
        bio:
          "This whale will represent the great whale conservacy and raise funds for this organisation. Please visit their website for more details.",
      },
      {
        list_id: 2,
        name: "Pangolin",
        role: "Sarah",
        avatar_url: "/assets/images/comingsoon.png",
        html_url: "https://pangolin.africa",
        thread_url:
          "/orbitdb/zdpuB2uFdBY9mqp2H3iFZQMkMsLzV5h33a3nEoT1BuSsYtsbL/3box.thread.wildcards.SarahPangolin",
        active: false,
        company_bio: "Sarah",
        bio:
          "Pangolin.Africa stops the trafficking of this extremely endangered animal. Visit their website for more details.",
      },
    ],
    episode: {},
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const getEpisodes = () => {
    dispatch({
      type: GET_EPISODES,
      payload: state.episodes,
    });
  };

  const getEpisode = async (list_id) => {
    dispatch({
      type: GET_EPISODE,
      payload: state.episodes[list_id],
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        episodes: state.episodes,
        episode: state.episode,
        getEpisodes,
        getEpisode,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
