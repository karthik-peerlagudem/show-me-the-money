import { BalanceSheetReport } from './components/report/balance-sheet-report';
import './App.css';
import { UseGetBalanceSheet } from './hook/use-get-balance-sheet';
import { Header } from './components/header/header';

function App() {
    const { data, loading } = UseGetBalanceSheet();

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
