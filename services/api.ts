import axios, { AxiosResponse } from "axios";
import { Project } from "../interfaces/projects";

const instance = axios.create({
  baseURL: `http://localhost:1337/projects`,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

const getProjects = (): Promise<Project[]> => requests.get("projects");

const getProjectId = (id: string): Promise<Project> =>
  requests.get(`projects/${id}`);

export { getProjects, getProjectId };
