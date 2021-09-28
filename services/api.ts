import axios, { AxiosResponse } from "axios";
import { Project, People } from "../interfaces/projects";

const instance = axios.create({
  baseURL: process.env.API_URL,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: Project) =>
    instance.post(url, body).then(responseBody),
  put: (url: string, body: Project) =>
    instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

const getProjects = (): Promise<Project[]> => requests.get("/projects");

const getProjectId = (id: string): Promise<Project> =>
  requests.get(`/projects/${id}`);

const getPeople = (): Promise<People[]> => requests.get("/project-managers");

const getPeopleId = (id: string): Promise<People> =>
  requests.get(`/project-managers/${id}`);

const createProject = (project: Project) => requests.post("/projects", project);

const deleteProject = (id: string) => requests.delete(`projects/${id}`);

const updatedProject = (project: Project, id: string) =>
  requests.put(`projects/${id}`, project);

export {
  getProjects,
  getProjectId,
  createProject,
  getPeople,
  getPeopleId,
  deleteProject,
  updatedProject,
};
