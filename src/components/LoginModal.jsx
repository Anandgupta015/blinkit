import { useState } from "react";

function LoginModal({ open, onClose, onLoginSuccess }) {
  const [step, setStep] = useState("phone"); // "phone" | "otp"
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSendOtp = () => {
    if (phone.trim().length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 800);
  };

  const handleVerify = () => {
    if (otp.trim().length < 4) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess(phone);
      setPhone("");
      setOtp("");
      setStep("phone");
      onClose();
    }, 800);
  };

  const closeAll = () => {
    setPhone("");
    setOtp("");
    setStep("phone");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">
            {step === "phone" ? "Login / Sign up" : "Enter OTP"}
          </h2>
          <button
            onClick={closeAll}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {step === "phone" && (
          <>
            <p className="mb-3 text-xs text-gray-500">
              Get OTP on your mobile number to login quickly.
            </p>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium text-gray-700">
                Mobile number
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <span className="text-xs text-gray-500">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  className="flex-1 text-sm outline-none"
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <button
              onClick={handleSendOtp}
              disabled={phone.length < 10 || loading}
              className="mt-1 w-full rounded-lg bg-green-500 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
            <p className="mt-2 text-[10px] text-gray-500">
              By continuing, you agree to our Terms & Privacy Policy.
            </p>
          </>
        )}

        {step === "otp" && (
          <>
            <p className="mb-3 text-xs text-gray-500">
              We have sent an OTP to <span className="font-semibold">+91 {phone}</span>
            </p>
            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium text-gray-700">
                Enter 4-digit OTP (demo)
              </label>
              <input
                type="tel"
                maxLength={4}
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-center text-lg tracking-[0.5em] outline-none"
              />
            </div>
            <button
              onClick={handleVerify}
              disabled={otp.length < 4 || loading}
              className="mt-1 w-full rounded-lg bg-green-500 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
            <button
              onClick={() => {
                setStep("phone");
                setOtp("");
              }}
              className="mt-2 w-full text-center text-xs text-gray-500 hover:text-gray-800"
            >
              Change number
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
