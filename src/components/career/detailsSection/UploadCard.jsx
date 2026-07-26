import { useRef, useState } from "react";
import { X } from "lucide-react";

function UploadCard({
  title,
  icon,
  file,
  error,
  onFileSelect,
  onClear,
  accept,
  helperText = "PDF up to 1 MB",
}) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === "dragenter" || event.type === "dragover") {
      setIsDragActive(true);
    } else if (event.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);

    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const handleFileSelection = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
        {title}
      </span>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => !file && fileInputRef.current?.click()}
        className={`relative flex min-h-32.5 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-3 text-center transition-all duration-200
          ${
            file
              ? "cursor-default border-solid bg-gray-50/50 dark:bg-zinc-800/30"
              : "cursor-pointer"
          }
          ${
            isDragActive
              ? "border-indigo-500 bg-indigo-50/30 dark:bg-indigo-950/20"
              : ""
          }
          ${
            error && !file
              ? "border-rose-400 bg-rose-50/10 dark:border-rose-500/40"
              : "border-gray-200 hover:border-indigo-500 dark:border-zinc-700 dark:hover:border-indigo-400"
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileSelection}
        />

        {file ? (
          <div className="flex w-full flex-col items-center px-2">
            <div className="mb-2 rounded-xl bg-indigo-50 p-1.5 text-indigo-500 dark:bg-indigo-950/40">
              {icon}
            </div>
            <p className="mb-1 max-w-full truncate px-3 text-xs font-medium text-gray-900 dark:text-zinc-100">
              {file.name}
            </p>
            <p
              className={`mb-2 text-[11px] ${
                file.size > 1024 * 1024 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {(file.size / (1024 * 1024)).toFixed(2)} MB
              {file.size > 1024 * 1024 && " — Max 1 MB allowed"}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClear();
              }}
              className="inline-flex items-center gap-1 p-1 text-xs font-semibold text-rose-500 transition hover:text-rose-600"
            >
              <X size={14} /> Remove File
            </button>
          </div>
        ) : (
          <>
            <div
              className={`mb-3 text-gray-400 ${isDragActive ? "text-indigo-500" : ""}`}
            >
              {icon}
            </div>
            <p className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              Click to upload{" "}
              <span className="font-normal text-gray-500 dark:text-gray-400">
                or drag & drop
              </span>
            </p>
            <p className="mt-1 text-[10px] text-gray-400">{helperText}</p>
          </>
        )}
      </div>
      {error && !file && (
        <p className="text-xs font-medium text-rose-500">{error}</p>
      )}
    </div>
  );
}

export default UploadCard;
