import { BalanceSheetReport } from './components/report/BalanceSheet/index';
import { useGetBalanceSheet } from './hook/useGetBalanceSheet';
import { Header } from './components/header';

import './App.css';

function App() {
    const { data, loading } = useGetBalanceSheet();

    return (
        <>
            <Header />
            <div className="container">
                {loading ? (
                    <p className="balance-sheet-loading">Loading...</p>
                ) : (
                    <BalanceSheetReport reportData={data} />
                )}
            </div>
        </>
    );
}

export default App;
