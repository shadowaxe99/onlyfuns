import axios from 'axios';

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(url: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseURL}${url}`);
      return response.data;
    } catch (error) {
      console.error('Error occurred while making GET request:', error);
      throw error;
    }
  }

  async post(url: string, data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseURL}${url}`, data);
      return response.data;
    } catch (error) {
      console.error('Error occurred while making POST request:', error);
      throw error;
    }
  }

  async put(url: string, data: any): Promise<any> {
    try {
      const response = await axios.put(`${this.baseURL}${url}`, data);
      return response.data;
    } catch (error) {
      console.error('Error occurred while making PUT request:', error);
      throw error;
    }
  }

  async delete(url: string): Promise<any> {
    try {
      const response = await axios.delete(`${this.baseURL}${url}`);
      return response.data;
    } catch (error) {
      console.error('Error occurred while making DELETE request:', error);
      throw error;
    }
  }
}

export default ApiService;