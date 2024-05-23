class StrapiHelper {
  // strapi url
  private url = 'https://pmot-cms.psww.dev/api'
  // strapi api key
  private apiKey = 'b4b4e12552beffb82a5735e32b735295778155fc3c4e1aecfdb1d9181b77a100589db85cd755ba1a7027263c9fab9552344fef0e4e61d9fb319067b078490dff56f9ead265ae064f2851663aa6ae4ed3f5fb45ab3ab4d05c19867fea0189cf1a737e0cecc61f644ddb467a6bd6c4181cfb4bfaaaf3a28eaea22d283cd6ef094f'
  
  
  constructor() {
    if (!this.url) {
      throw new Error('STRAPI_URL environment variable is not set');
    }

    if (!this.apiKey) {
      throw new Error('STRAPI_KEY environment variable is not set');
    }
  }

  public async getStrapiData({
    query = '',
  }: {
    query?: string;
  }) {
    try {
      const response = await fetch(this.url + query, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },

      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Strapi data:', error);
      throw error;
    }
  }
}

export default StrapiHelper;
