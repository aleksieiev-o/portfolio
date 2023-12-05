export const sendContactsForm = async (data) => fetch('/api/contacts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application-json',
    'Accept': 'application-json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
});
