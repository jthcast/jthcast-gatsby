import {
  DynamoDBClient,
  UpdateItemCommand,
  UpdateItemInput,
} from '@aws-sdk/client-dynamodb';
import { NowRequest, NowResponse } from '@vercel/node';

const dbclient = new DynamoDBClient({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: 'AKIA23PHNMHMLEICQNGK',
    secretAccessKey: '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',
  },
});

const viewCounter = async (req: NowRequest, res: NowResponse) => {
  try {
    if (req.method === 'POST') {
      const params: UpdateItemInput = {
        TableName: 'pages',
        UpdateExpression:
          'SET viewCount = if_not_exists(viewCount, :init) + :val',
        ExpressionAttributeValues: {
          ':init': { N: '0' },
          ':val': { N: '1' },
        },
        ReturnValues: 'ALL_NEW',
        Key: {
          slug: { S: req.body.slug },
          publishDate: { S: req.body.publishDate },
        },
      };
      const results = await dbclient.send(new UpdateItemCommand(params));
      res.status(200).json(results);
    }
  } catch (err) {
    console.error(err);
  }
};

export default viewCounter;
