import fetch from 'isomorphic-unfetch'

type Config = {
  apiKey: string;
  apiUrl: string;
}

export abstract class Base {
  private apiKey: string
  private apiUrl: string

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.apiUrl = config.apiUrl
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.apiUrl}${endpoint}`
    const headers = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${this.apiKey}`
    }
    const config = {
      ...options,
      headers
    }

    return fetch(url, config).then(async res => {
      return await res.json()
    })
  }
}