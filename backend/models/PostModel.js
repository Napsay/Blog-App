import db from "../config/database.js";
import { DataTypes } from "sequelize";
const Post = db.define(
"posts",
{
title: {
type: DataTypes.STRING,
},
description: {
type: DataTypes.STRING,
},
},
{
freezeTableName: true,
}
);
export default Post;
