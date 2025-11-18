import { useState } from "react";
import QRCode from "qrcode";
import { Download, Copy, Check } from "lucide-react";

interface QRCodeGeneratorProps {
  url: string;
  size?: number;
}

export const QRCodeGenerator = ({ url, size = 200 }: QRCodeGeneratorProps) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const generateQR = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(url, {
        width: size,
        margin: 2,
        color: {
          dark: "#2563eb",
          light: "#ffffff",
        },
      });
      setQrDataUrl(dataUrl);
    } catch (err) {
      console.error("Error generating QR code:", err);
    }
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = `ar-pharma-qr-${Date.now()}.png`;
    link.href = qrDataUrl;
    link.click();
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generateQR}
        className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
      >
        Generate QR Code
      </button>
      
      {qrDataUrl && (
        <div className="space-y-3">
          <div className="flex justify-center p-4 bg-white rounded-xl border border-gray-200">
            <img src={qrDataUrl} alt="QR Code" className="w-full max-w-[200px]" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={downloadQR}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={copyUrl}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

