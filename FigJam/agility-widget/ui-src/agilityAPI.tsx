function createAgilityAPIInstance(baseUrl = '', accessCode:string) {

    async function postData(path = '', data = {}) {
      const response = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessCode}`
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }

    async function get(path = '') {
      const response = await fetch(`${baseUrl}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status !== 200) {
        throw new Error('Invalid access code or Agility URL');
      }
      return response.json();
    }

    return {
      asset: async (data:any) => {
        return postData('/api/asset', data);
      },
      query: async (data:any) => {
        return postData('/query.v1', data);
      },
      meta: async () => {
        return get('/meta.v1');
      }
    }
  }

  export default createAgilityAPIInstance;