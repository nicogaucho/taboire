'use server'

export async function contactFormAction(data) {
  try {
    const response = await fetch("https://usebasin.com/f/7e8f8071ec0f", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('An Error occured, error in fetch')
    }
  } catch (error) {
    return { error: error.message || 'An Error occured, try again' }
  }
}
