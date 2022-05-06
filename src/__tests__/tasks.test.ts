import supertest from "supertest";
import App from "../app";




export const taskPayload = {

  title: "Learn Node typescript",
  author: "alice",
  duration: "2022-09-30 to 2022-10-30",
  description:
    "some text just happening here some text just happening here some text just happening happening here some text just happening  here.."
 
};

 
  describe("get task route by author", () => {
    describe("given the author  does not exist", () => {
      it("should return a 404", async () => {
        const author = "unknown";
        await supertest(App).get(`/tasks/${author}`).expect(404);
      });
    });

    describe("given the author does exist", () => {
      it("should return a 200", async () => {
        const author = "alice";
        await supertest(App).get(`/tasks/${author}`).expect(200);
      });
     
    });
  });

  describe("create task route", () => {
  
      it("should return a 201 and create the task", async () => {

        const { statusCode} = await supertest(App)
          .post("/tasks")
          .send(taskPayload);
        expect(statusCode).toBe(201);
      
      });
   

  });

