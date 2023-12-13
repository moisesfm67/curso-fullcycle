import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { wallet_id: string } }
) {
  const response = await fetch(
    `http://host.docker.internal:3000/wallets/${params.wallet_id}/assets`,
    {
      next: {
        revalidate: 1,
      },
    }
  );
  
  return NextResponse.json(await response.json());
}
