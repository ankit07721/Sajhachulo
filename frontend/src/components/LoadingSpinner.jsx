const LoadingSpinner = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "4px solid #e5e7eb",
                    borderTopColor: "#111827",
                    animation: "spin 1s linear infinite",
                }}
            />
            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default LoadingSpinner;