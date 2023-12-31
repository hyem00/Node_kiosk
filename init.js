import dotenv from "dotenv";
import Http from "node:http";
import { ExpressApp } from "./app";
import { sequelize } from "./db";

dotenv.config();

export class Server {
  expressApp = new ExpressApp();
  httpServer;

  constructor() {
    // HTTP 서버를 생성하고, expressApp을 사용하여 요청을 처리하도록 설정
    this.httpServer = new Http.Server(this.expressApp.app);
  }

  // 데이터베이스 연결
  databaseConnection = () => {
    // sequelize 모듈을 사용하여 데이터베이스에 연결
    return this.sequelizeAuthenticate().then(this.sequelizeSync);
  };

  // Sequelize로 데이터베이스에 인증 시도
  sequelizeAuthenticate = () => {
    // sequelize.authenticate() 메서드를 사용하여 데이터베이스에 인증
    // 시퀄라이저 내장함수임
    return sequelize.authenticate();
  };

  // Sequelize로 데이터베이스와 모델을 동기화하는 메서드
  sequelizeSync = () => {
    // sequelize.sync() 메서드를 사용하여 데이터베이스와 모델을 동기화 (alter 옵션을 통해 스키마를 변경)
    // 이 부분이 마이그레이션을 안해도 되는 이유였음
    return sequelize.sync({ alter: true });
  };

  // 서버를 실행하는 메서드입니다.
  runServer = async () => {
    try {
      // 데이터베이스 연결
      await this.databaseConnection();
      // 서버를 실행하고 클라이언트의 요청을 수신 대기
      return this.serverListen();
    } catch (e) {
      // 에러가 발생하면 에러 핸들러를 호출
      return this.serverErrorHandler(e);
    }
  };

  // HTTP 서버를 시작하는 메서드
  serverListen = () => {
    // .env 파일에서 PORT와 HOST 환경변수 값을 가져옴
    const { PORT: port, HOST: host } = process.env;
    // HTTP 서버 시작
    return this.httpServer.listen(port, () => {
      console.log(`Server is running on: http://${host}:${port}`);
    });
  };

  // 서버 실행 에러 처리
  serverErrorHandler = (error) => {
    console.log("Server run error: ", error.message);
  };
}

// Server 클래스의 인스턴스를 생성
// 위에서 만들어놓은걸 여기서 생성
const server = new Server();

// 여기서 실행
server.runServer();
