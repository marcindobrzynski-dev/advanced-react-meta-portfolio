interface SubmitResponse {
  type: 'success' | 'error';
  message: string;
};

interface SubmitData {
  name: string;
  email: string;
  typeOfEnquiry: string;
  message: string;
}

export type { SubmitResponse, SubmitData };
