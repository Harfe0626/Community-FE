import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static('images'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', function(req, res){
  const filePath = path.join(__dirname,'views','Login.html')
  res.sendFile(filePath);
});
app.get('/memberedit', function(req, res){
  const filePath = path.join(__dirname,'views','MemberEdit.html')
  res.sendFile(filePath);
});
app.get('/memberinfo', function(req, res){
  const filePath = path.join(__dirname,'views','MemberInfo.html')
  res.sendFile(filePath);
});
app.get('/notice', function(req, res){
  const filePath = path.join(__dirname,'views','Notice.html')
  res.sendFile(filePath);
});
app.get('/noticedetail', function(req, res){
  const filePath = path.join(__dirname,'views','NoticeDetail.html')
  res.sendFile(filePath);
});
app.get('/noticeedit', function(req, res){
  const filePath = path.join(__dirname,'views','NoticeEdit.html')
  res.sendFile(filePath);
});
app.get('/noticewrite', function(req, res){
  const filePath = path.join(__dirname,'views','NoticeWrite.html')
  res.sendFile(filePath);
});
app.get('/signup', function(req, res){
  const filePath = path.join(__dirname,'views','Signup.html')
  res.sendFile(filePath);
});