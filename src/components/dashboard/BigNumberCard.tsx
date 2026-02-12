type Props = {
  label: string;
  value: number;
  growth?: number;
};

export default function BigNumberCard({ label, value, growth }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-500 text-sm">{label}</p>
      <h2 className="text-3xl font-bold mt-2">{value.toLocaleString()}</h2>

      {growth && (
        <p className="text-green-500 text-sm mt-2">
          +{growth}% from last month
        </p>
      )}
    </div>
  );
}
