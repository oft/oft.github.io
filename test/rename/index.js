const fs = require("fs");
const path = require("path");
const files = ["b2a90db1b14e852458fb57e5", "b2a90db1b14e852458fb57e5(1)", "b2a90db1b14e852458fb57e5(2)", "b2a90db1b14e852458fb57e5(3)", "b2a90db1b14e852458fb57e5(4)", "b2a90db1b14e852458fb57e5(5)", "b2a90db1b14e852458fb57e5(6)", "b2a90db1b14e852458fb57e5(7)", "b2a90db1b14e852458fb57e5(8)", "b2a90db1b14e852458fb57e5(9)", "b2a90db1b14e852458fb57e5(10)", "b2a90db1b14e852458fb57e5(11)", "b2a90db1b14e852458fb57e5(12)", "b2a90db1b14e852458fb57e5(13)", "b2a90db1b14e852458fb57e5(14)", "b2a90db1b14e852458fb57e5(15)", "b2a90db1b14e852458fb57e5(16)", "b2a90db1b14e852458fb57e5(17)", "b2a90db1b14e852458fb57e5(18)", "b2a90db1b14e852458fb57e5(19)", "b2a90db1b14e852458fb57e5(20)", "b2a90db1b14e852458fb57e5(21)", "b2a90db1b14e852458fb57e5(22)", "b2a90db1b14e852458fb57e5(23)", "b2a90db1b14e852458fb57e5(24)", "b2a90db1b14e852458fb57e5(25)", "b2a90db1b14e852458fb57e5(26)", "b2a90db1b14e852458fb57e5(27)"]


var dir = `C:\\Users\\kunjia03\\Desktop\\ss\\中考英语形容词、副词讲解(共28张PPT) - 百度文库_files`;

files.forEach((item,i)=>{
    fs.rename(path.join(dir,"img"+(i+1)),path.join(dir,"img"+(i+1)+".jpg"),console.log)
})

