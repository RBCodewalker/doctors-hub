"use server";

import { Doctor } from "@/model";

export const fetchData = async (page: number) => {
// export async function fetchData(page: number) {
  // const apiUrl = `https://challenge.digitalepatientenhilfe.de/api/doctors?page=${page}`;
  const apiUrl = `https://challenge.digitalepatientenhilfe.de/api/doctors?page=${page}`
  // console.log("test");
  try {
    const response = await fetch(apiUrl);
    // TODO: check response.ok

    const data = await response.json();
    return data.results as Doctor[];
  } catch (error) {
    console.error('Failed to fetch data:', error);
    // throw new Error('Failed to fetch data');
    // return [] as Doctor[];
    return null;
  }
};