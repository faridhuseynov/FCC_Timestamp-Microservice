var now =new Date();
const year = now.getFullYear();
const month = (now.getMonth()+1)<10?'0'+(now.getMonth()+1):(now.getMonth()+1);
const day = (now.getDay()<10?'0'+now.getDay():now.getDay());
const date = `${year}/${month}/${day}`;
const milliseconds = now.getTime();

