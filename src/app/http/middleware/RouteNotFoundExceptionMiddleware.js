export default async ( req, res) => {
    const data = {
        status: false,
        statusCode: 500,
        message: `[${req.method}]:${req.url} Route Not Found`,
        data: null,
    };

    res.status(500).send(data);
};
