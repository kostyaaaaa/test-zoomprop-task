import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

class HttpService {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

  async get(url: string, config?: AxiosRequestConfig) {
    try {
      return await this.instance.get(url, config)
    } catch (err) {
      console.error('HttpService error: ', err)
    }
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    try {
      return await this.instance.post(url, data, config)
    } catch (err) {
      console.error('HttpService error: ', err)
    }
  }
}

export default new HttpService()
