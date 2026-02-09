import { Link, Trash2 } from "lucide-react";

type CenterCardProps = {
  name: string;
  password?: string;
  onLink?: () => void;
  onDelete?: () => void;
  onViewData?: () => void;
  onEdit?: () => void;
};

const CenterCard: React.FC<CenterCardProps> = ({
  name,
  password,
  onLink,
  onDelete,
  onViewData,
  onEdit,
}) => {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-sm">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">
            {name}
          </h3>
          {password && (
            <p className="mt-1 text-sm text-slate-400">
              Pass: <span className="font-medium text-slate-500">{password}</span>
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onLink}
            className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
          >
            <Link size={16} />
          </button>

          <button
            onClick={onDelete}
            className="rounded-full bg-red-50 p-2 text-red-500 hover:bg-red-100"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Edit */}
      <div className="mt-3">
        <button
          onClick={onEdit}
          className="text-xs font-semibold uppercase tracking-tight text-blue-600 hover:underline"
        >
          Edit
        </button>
      </div>

      {/* View Data Button */}
      <button
        onClick={onViewData}
        className="mt-5 w-full rounded-full bg-slate-100 py-3 text-sm font-semibold tracking-tight text-slate-700 hover:bg-slate-200"
      >
        VIEW DATA
      </button>
    </div>
  );
};

export default CenterCard;
