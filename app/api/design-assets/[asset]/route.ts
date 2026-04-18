import { promises as fs } from "fs"
import { NextResponse } from "next/server"

const ASSET_MAP: Record<string, string> = {
  logo: "C:\\Users\\Abishan\\.cursor\\projects\\c-Users-Abishan-Downloads-Compressed-b-tUAyXuNuP0I\\assets\\c__Users_Abishan_AppData_Roaming_Cursor_User_workspaceStorage_f78a09cdfbf7fc5e643b0a29862455ec_images_website_logo_new-01-40bc2f1e-57ca-411e-ac5a-4bc1fd9e23b0.png",
  wordmark:
    "C:\\Users\\Abishan\\.cursor\\projects\\c-Users-Abishan-Downloads-Compressed-b-tUAyXuNuP0I\\assets\\c__Users_Abishan_AppData_Roaming_Cursor_User_workspaceStorage_f78a09cdfbf7fc5e643b0a29862455ec_images_chroma-01-03398065-5f08-401e-b25c-40fe127dafae.png",
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ asset: string }> },
) {
  const { asset } = await params
  const filePath = ASSET_MAP[asset]
  if (!filePath) return new NextResponse("Asset not found", { status: 404 })

  try {
    const file = await fs.readFile(filePath)
    return new NextResponse(file, {
      headers: {
        "Content-Type": "image/png",
      },
    })
  } catch {
    return new NextResponse("Unable to read asset", { status: 500 })
  }
}
