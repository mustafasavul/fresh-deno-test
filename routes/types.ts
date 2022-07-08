
export type Price = {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

export type Time = {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export type Bpi = {
  USD: Usd;
  GBP: Gbp;
  EUR: Eur;
}

export type Usd = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export type Gbp = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export type Eur = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}