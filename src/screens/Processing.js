import React from 'react'
import { Row } from 'react-bootstrap'
import { MDBSpinner } from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom'

export default function Processing() {
  const navigate = useNavigate();

  return(
    <div className='d-flex align-items-center justify-content-center'>
      <div className="mt-5 p-5 border d-flex align-items-center" style={{ height: "400px" }}>
        <MDBSpinner className="p-5" role='status'/>
        <Row className='p-5'>
          <h5>
            Processing...
          </h5>
        </Row>
      </div>
    </div>
  );
}

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const text = """ He is most likely to be a rapper. He beatboxes and plays basketball in his spare time.\nHis girlfriend is also likely to be a black too.\nHe might do drugs. """

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: f"""
//     Is the writer of the following text discriminating in anyway? \
//     identify the writer's biases and misconceptions.

//     text: '''{text}'''
//     """
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });

// const result = response.choices[0].message["content"]