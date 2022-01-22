

export default function handler(req, res) {
    res.status(200).json({ name: 'Hi Slug...' })
  }

  // if we go rootpath/api/coffee/[anything]
  // it will send a default route
  // rather then error route...

  // This is called catch all route.