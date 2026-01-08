import CareerPath from "../models/CareerPath.js";

export const getUserCareerPaths = async (req, res) => {
  try {
    const userID = req.params.userId; // Ensure this matches route parameter

    if (!userID) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const careerPaths = await CareerPath.find({ user: userID }).sort({ createdAt: -1 });

    if (careerPaths.length === 0) {
      return res.status(404).json({ success: false, message: "No career paths found for this user." });
    }

    res.status(200).json({ success: true, count: careerPaths.length, data: careerPaths });
  } catch (error) {
    console.error("Error fetching user career paths:", error);
    res.status(500).json({ error: "Server Error" });
  }
};


export const getCareerPathById = async (req, res) => {
  // const userID = req.params.id;
  const  pathID = req.params.id
  // const userID = 'req.user.id';
  // const userID = req.body.userId;
  // const userID = '67c3004034fbff000c87ffd8';
  try {
    const careerPath = await CareerPath.findOne({ _id: pathID, user: userID });

    if (!careerPath) {
      return res.status(404).json({ error: "Career path not found" });
    }

    res.status(200).json({ success: true, data: careerPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};


export const getDeleteRoadmapById = async (req,res)=>{
    const pathId = req.params.id;

    try {
      const roadmap = await CareerPath.findOne({_id:pathId});

      if(!roadmap){
          console.log("roadmap not find :");
          res.status(200).json({
            success:false,
            massage:"roadmap not in data bases faild to serch "
          })
      }
      const deleteRoadmpa = await CareerPath.deleteOne({_id:pathId});

      res.status(200).json({
        success:true,
        massage:"roadmap deleted succufuly",
        deleteRoadmpa
      })

    } catch (error) {
      res.status(404).json({
        success:false,
        massage:"faild to delete roadmap by path id"
      })
      console.log("error in geDeleteRoadmapById :",error);
    }
}