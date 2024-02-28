// import results from '@/app/api/accommodations.json';
import accommodations from '@/dummy/accommodations.json';

export async function POST(request, response) {
  // 검색 API 용
  const results = accommodations.results
    .filter(() => {
      //   request;
      return true;
    })
    .map((eachAccommodation) => ({
      title: eachAccommodation.title,
    }));
  return Response.json({ results });
}

export async function GET1(request, response) {
  // 검색 API 용
  const results = accommodations.results
    .filter(() => {
      request;
    })
    .map((eachAccommodation) => ({
      name: eachAccommodation.name,
      age: eachAccommodation.age,
    }));
  return Response.json({ results });
}

export async function GET2(request, response) {
  // 단일 정보용
  const found = accommodations.results.find(
    (eachAccommodation) => eachAccommodation.id === request.param.id,
  );
  return Response.json({ result: found[0] });
}
