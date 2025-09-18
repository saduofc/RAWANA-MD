const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "J680WLCL#uSBPyOpn6DKGJAxC0jxa8cVyTdMEelvJdAMX5rZ4_3k":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:PBssubeNDRgtYkVwtZATcuoXmpPfOwBn@switchyard.proxy.rlwy.net:54404",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
