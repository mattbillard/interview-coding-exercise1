
/*
DON'T EDIT THIS FILE
 */

(function(){
    function promiseMaker(results) {
        var deferred = $.Deferred(function(defer) {
            setTimeout(function() {
                defer.resolve(results);
            });
        }, 100);
        return deferred.promise();
    }

    //Simulates searching a database for a stock beginning with str
    function search(str) {
        var results = [];
        for (var key in stocksDb) {
            var stock = stocksDb[key],
                reg = new RegExp(str, 'i');
            if (stock.name.search(reg) === 0) {
                results.push(stock);
            }
        }

        return promiseMaker(results);
    }

    //Simulates adding a stock to portfolio
    function addToPortfolio(id) {
        portfolio[id] = stocksDb[id].price;
        var result = stocksDb[id];
        return promiseMaker(result);
    }

    //Simulates streaming updates of prices
    function streamUpdates(callback) {
        setInterval(function(){
            for (var key in portfolio) {
                var amount = Math.random() -0.5;
                portfolio[key] += amount;
            }
            callback(portfolio);
        }, 1000);
    }


    var portfolio = {};
    var stocksDb = {
        90:   {id:90, symbol:'ABCB', name:'Ameris Bancorp', market:'NASDAQ', currency:'GBP', price:16.94},
        180:  {id:180, symbol:'ACAT', name:'Arctic Cat Inc', market:'NASDAQ', currency:'EUR', price:46.69},
        300:  {id:300, symbol:'ACTS', name:'Actions Semiconductor Co Ltd', market:'NASDAQ', currency:'HKD', price:3.01},
        750:  {id:750, symbol:'AHT-A', name:'ASHFORD HOSPITALITY TR INC 8.55% SER A', market:'NYSE', currency:'RMB', price:25.71},
        1020: {id:1020, symbol:'ALSK', name:'Alaska Communications Systems Group Inc', market:'NASDAQ', currency:'USD', price:1.71},
        1200: {id:1200, symbol:'AMTD', name:'TD Ameritrade Holding Corp', market:'NYSE', currency:'GBP', price:23.2},
        2850: {id:2850, symbol:'AM', name:'American Greetings Corp', market:'NYSE', currency:'EUR', price:18.46},
        3210: {id:3210, symbol:'CFNL', name:'Cardinal Financial Corporation', market:'NASDAQ', currency:'HKD', price:17.69},
        3240: {id:3240, symbol:'DF', name:'Dean Foods Co', market:'NYSE', currency:'RMB', price:10.37},
        3300: {id:3300, symbol:'CFD', name:'Nuveen Diversified Commodity Fund', market:'AMEX', currency:'USD', price:19},
        3450: {id:3450, symbol:'AV', name:'Aviva plc', market:'NYSE', currency:'GBP', price:13.09},
        3540: {id:3540, symbol:'DBLE', name:'Double Eagle Petroleum Co', market:'NASDAQ', currency:'EUR', price:4.17},
        3600: {id:3600, symbol:'BLK', name:'BlackRock Inc', market:'NYSE', currency:'HKD', price:278.33},
        3660: {id:3660, symbol:'DATA', name:'Tableau Software', market:'NYSE', currency:'RMB', price:65.98},
        3870: {id:3870, symbol:'CDR', name:'Cedar Realty Trust Inc', market:'NYSE', currency:'USD', price:5.84},
        3900: {id:3900, symbol:'BKS', name:'Barnes & Noble Inc', market:'NYSE', currency:'GBP', price:22.34},
        3960: {id:3960, symbol:'ETN', name:'Eaton Corp PLC', market:'NYSE', currency:'EUR', price:76.12},
        4140: {id:4140, symbol:'FSCI', name:'Fisher Communications Inc', market:'NASDAQ', currency:'HKD', price:41.33},
        4200: {id:4200, symbol:'ESV', name:'Ensco CL A', market:'NYSE', currency:'RMB', price:57.18},
        4410: {id:4410, symbol:'CMO', name:'Capstead Mortgage Corp', market:'NYSE', currency:'USD', price:12.33},
        4470: {id:4470, symbol:'ASTX', name:'Astex Pharmaceuticals Inc', market:'NASDAQ', currency:'GBP', price:4.71},
        4560: {id:4560, symbol:'CWTR', name:'Coldwater Creek Inc', market:'NASDAQ', currency:'EUR', price:3.7},
        4800: {id:4800, symbol:'BHB', name:'Bar Harbor Bankshares', market:'AMEX', currency:'HKD', price:36.41},
        4890: {id:4890, symbol:'CVRR', name:'CVR Refining LP', market:'NYSE', currency:'RMB', price:22.62},
        4920: {id:4920, symbol:'ARTX', name:'Arotech Corp', market:'NASDAQ', currency:'USD', price:1.5},
        4980: {id:4980, symbol:'BGFV', name:'Big 5 Sporting Goods Corp', market:'NASDAQ', currency:'GBP', price:20.25},
        5010: {id:5010, symbol:'CLP', name:'Colonial Properties Trust', market:'NYSE', currency:'EUR', price:23.37},
        5040: {id:5040, symbol:'BGC', name:'General Cable Corp', market:'NYSE', currency:'HKD', price:34.95},
        5070: {id:5070, symbol:'CVD', name:'Covance Inc', market:'NYSE', currency:'RMB', price:74.31},
        5310: {id:5310, symbol:'AQ', name:'Acquity Group Ltd', market:'AMEX', currency:'USD', price:12.87},
        5340: {id:5340, symbol:'CUB', name:'Cubic Corp', market:'NYSE', currency:'GBP', price:48.94},
        5370: {id:5370, symbol:'BERK', name:'Berkshire Bancorp Inc', market:'NASDAQ', currency:'EUR', price:8.07},
        5490: {id:5490, symbol:'CAT', name:'Caterpillar Inc', market:'NYSE', currency:'HKD', price:86.13},
        5670: {id:5670, symbol:'CTO', name:'Consolidated-Tomoka Land Co', market:'AMEX', currency:'RMB', price:37.88},
        5700: {id:5700, symbol:'CIX', name:'CompX International Inc', market:'AMEX', currency:'USD', price:12.07},
        5790: {id:5790, symbol:'CAM', name:'Cameron International Corp', market:'NYSE', currency:'GBP', price:59.53},
        5850: {id:5850, symbol:'FLEX', name:'Flextronics International Ltd', market:'NASDAQ', currency:'EUR', price:7.5},
        5910: {id:5910, symbol:'CTAS', name:'Cintas Corp', market:'NASDAQ', currency:'HKD', price:45.71},
        5940: {id:5940, symbol:'EMCF', name:'Emclaire Financial Corp', market:'NASDAQ', currency:'RMB', price:24.5},
        5970: {id:5970, symbol:'CIG.C', name:'Companhia Energetica de Minas Gerais-Cemig ADS', market:'NYSE', currency:'USD', price:8.09},
        6060: {id:6060, symbol:'CAAS', name:'China Automotive Systems Inc', market:'NASDAQ', currency:'GBP', price:5.25},
        6150: {id:6150, symbol:'BC', name:'Brunswick Corp', market:'NYSE', currency:'EUR', price:33.35},
        6240: {id:6240, symbol:'CHUY', name:'Chuys Holdings Inc', market:'XNAS', currency:'HKD', price:36.02},
        6360: {id:6360, symbol:'FFNM', name:'First Federal Of Northern Michigan Bancorp Inc', market:'NASDAQ', currency:'RMB', price:4.48},
        6420: {id:6420, symbol:'FFIN', name:'First Financial Bankshares Inc', market:'NASDAQ', currency:'USD', price:56.26},
        6450: {id:6450, symbol:'BAM', name:'Brookfield Asset Management Inc', market:'NYSE', currency:'GBP', price:35.39},
        6510: {id:6510, symbol:'FFBH', name:'First Federal Bancshares of Arkansas Inc', market:'NASDAQ', currency:'EUR', price:9.7},
        6990: {id:6990, symbol:'IBN', name:'ICICI Bank Ltd', market:'NYSE', currency:'HKD', price:44.11},
        7320: {id:7320, symbol:'GSI', name:'General Steel Holdings Inc', market:'NYSE', currency:'RMB', price:0.98},
        7380: {id:7380, symbol:'EDU', name:'New Oriental Education & Technology Group', market:'NYSE', currency:'USD', price:31.5},
        7410: {id:7410, symbol:'FBMI', name:'Firstbank Corp', market:'NASDAQ', currency:'GBP', price:13.52},
        7440: {id:7440, symbol:'BRID', name:'Bridgford Foods Corp', market:'NASDAQ', currency:'EUR', price:7.62},
        7680: {id:7680, symbol:'HWG', name:'Hallwood Group Inc', market:'AMEX', currency:'HKD', price:8.05},
        7830: {id:7830, symbol:'EXTR', name:'Extreme Networks Inc', market:'NASDAQ', currency:'RMB', price:3.62},
        7950: {id:7950, symbol:'CPAH', name:'CounterPath Corp', market:'NASDAQ', currency:'USD', price:1.74},
        7980: {id:7980, symbol:'EXLP', name:'Exterran Partners LP', market:'NASDAQ', currency:'GBP', price:27.86},
        8010: {id:8010, symbol:'HTS', name:'Hatteras Financial', market:'NYSE', currency:'EUR', price:19.71},
        8160: {id:8160, symbol:'EWBC', name:'East West Bancorp Inc', market:'NASDAQ', currency:'HKD', price:26.28},
        8220: {id:8220, symbol:'LAZ', name:'Lazard Ltd', market:'NYSE', currency:'RMB', price:33.18},
        8250: {id:8250, symbol:'ITG', name:'Investment Technology Group Inc', market:'NYSE', currency:'USD', price:13.79},
        8310: {id:8310, symbol:'DVR', name:'Cal Dive International Inc', market:'NYSE', currency:'GBP', price:2.08},
        8370: {id:8370, symbol:'LABC', name:'Louisiana Bancorp Inc', market:'NASDAQ', currency:'EUR', price:16.65},
        8430: {id:8430, symbol:'ISSI', name:'Integrated Silicon Solution Inc', market:'NASDAQ', currency:'HKD', price:10.82},
        8730: {id:8730, symbol:'MDXG', name:'MiMedx Group Inc', market:'NASDAQ', currency:'RMB', price:7.2},
        8880: {id:8880, symbol:'DRAD', name:'Digirad Corp', market:'NASDAQ', currency:'USD', price:2.32},
        8970: {id:8970, symbol:'MDM', name:'Mountain Province Diamonds Inc', market:'AMEX', currency:'GBP', price:5.32},
        9150: {id:9150, symbol:'HNH', name:'Handy & Harman Ltd', market:'NASDAQ', currency:'EUR', price:16.44},
        9300: {id:9300, symbol:'DMLP', name:'Dorchester Minerals LP', market:'NASDAQ', currency:'HKD', price:24.36},
        9450: {id:9450, symbol:'KMPR', name:'Kemper Corp', market:'NYSE', currency:'RMB', price:34.16},
        9540: {id:9540, symbol:'MCF', name:'Contango Oil & Gas Co', market:'AMEX', currency:'USD', price:35.29},
        9660: {id:9660, symbol:'GILD', name:'Gilead Sciences Inc', market:'NASDAQ', currency:'GBP', price:53.12},
        9870: {id:9870, symbol:'INFY', name:'Infosys Limited ADS', market:'NASDAQ', currency:'EUR', price:56.6},
        9960: {id:9960, symbol:'MAXY', name:'Maxygen Inc', market:'NASDAQ', currency:'HKD', price:2.48},
        10050: {id:10050, symbol:'MAS', name:'Masco Corp', market:'NYSE', currency:'RMB', price:20.74},
        10140: {id:10140, symbol:'KFRC', name:'Kforce Inc', market:'NASDAQ', currency:'USD', price:14.82},
        10290: {id:10290, symbol:'MAIN', name:'Main Street Capital', market:'NYSE', currency:'GBP', price:32.69},
        10320: {id:10320, symbol:'MAGS', name:'Magal Security Systems Ltd', market:'NASDAQ', currency:'EUR', price:3.78},
        10620: {id:10620, symbol:'LYB', name:'LyondellBasell Industries NV', market:'NYSE', currency:'HKD', price:66.65},
        10770: {id:10770, symbol:'HDSN', name:'Hudson Technologies Inc', market:'NASDAQ', currency:'RMB', price:3.51},
        11130: {id:11130, symbol:'IG', name:'IGI Laboratories Inc', market:'AMEX', currency:'USD', price:1.47},
        11220: {id:11220, symbol:'LTC', name:'LTC Properties Inc', market:'NYSE', currency:'GBP', price:42.26},
        11310: {id:11310, symbol:'OPEN', name:'OpenTable', market:'NASDAQ', currency:'EUR', price:79.37},
        11340: {id:11340, symbol:'JNPR', name:'Juniper Networks Inc', market:'NYSE', currency:'HKD', price:17.5},
        11490: {id:11490, symbol:'MTSC', name:'MTS Systems Corporation', market:'NASDAQ', currency:'RMB', price:63.4},
        11520: {id:11520, symbol:'IDRA', name:'Idera Pharmaceuticals Inc', market:'NASDAQ', currency:'USD', price:0.75},
        11550: {id:11550, symbol:'MTPVY', name:'Metropole Tv', market:'OTC', currency:'GBP', price:20},
        11580: {id:11580, symbol:'IDIX', name:'Idenix Pharmaceuticals Inc', market:'NASDAQ', currency:'EUR', price:4.94},
        11760: {id:11760, symbol:'LOGI', name:'Logitech International SA', market:'NASDAQ', currency:'HKD', price:6.91},
        11910: {id:11910, symbol:'ICAD', name:'iCAD Inc', market:'NASDAQ', currency:'RMB', price:6.04},
        11940: {id:11940, symbol:'MSL', name:'MidSouth Bancorp Inc', market:'AMEX', currency:'USD', price:15.51},
        12060: {id:12060, symbol:'OFI', name:'Overhill Farms Inc', market:'AMEX', currency:'GBP', price:4.95},
        12150: {id:12150, symbol:'LKQ', name:'LKQ Corp', market:'NASDAQ', currency:'EUR', price:32.9},
        12240: {id:12240, symbol:'PSMI', name:'Peregrine Semiconductor Corp', market:'NASDAQ', currency:'HKD', price:10.42},
        12480: {id:12480, symbol:'NYCB', name:'New York Community Bancorp Inc', market:'NYSE', currency:'RMB', price:13.08},
        12540: {id:12540, symbol:'LFL', name:'Latam Airlines Group SA', market:'NYSE', currency:'USD', price:18.6},
        12630: {id:12630, symbol:'MOFG', name:'MidWestOne Financial Group', market:'NASDAQ', currency:'GBP', price:24.46},
        12720: {id:12720, symbol:'LDL', name:'Lydall Inc', market:'NYSE', currency:'EUR', price:15.14},
        12750: {id:12750, symbol:'LCUT', name:'Lifetime Brands Inc', market:'NASDAQ', currency:'HKD', price:13.4},
        12780: {id:12780, symbol:'NWE', name:'Northwestern Corp', market:'NYSE', currency:'RMB', price:41.44},
        12810: {id:12810, symbol:'NWBI', name:'Northwest Bancshares Inc', market:'NASDAQ', currency:'USD', price:12.52},
        12870: {id:12870, symbol:'MN', name:'Manning & Napier Inc', market:'NYSE', currency:'GBP', price:19.98},
        12900: {id:12900, symbol:'POT', name:'Potash Corporation of Saskatchewan Inc', market:'NYSE', currency:'EUR', price:41.68},
        12930: {id:12930, symbol:'MMP', name:'Magellan Midstream Partners L.P.', market:'NYSE', currency:'HKD', price:63.27},
        12990: {id:12990, symbol:'PNY', name:'Piedmont Natural Gas Company Inc', market:'NYSE', currency:'RMB', price:33.84},
        13080: {id:13080, symbol:'NTI', name:'Northern Tier Energy', market:'NYSE', currency:'USD', price:24.6},
        13140: {id:13140, symbol:'NTCT', name:'NetScout Systems Inc', market:'NASDAQ', currency:'GBP', price:29.59},
        13260: {id:13260, symbol:'MITK', name:'Mitek Systems Inc', market:'NASDAQ', currency:'EUR', price:6.51},
        13320: {id:13320, symbol:'PMBC', name:'Pacific Mercantile Bancorp', market:'NASDAQ', currency:'HKD', price:5.61},
        13350: {id:13350, symbol:'NRG', name:'NRG Energy Inc', market:'NYSE', currency:'RMB', price:25.53},
        13500: {id:13500, symbol:'NP', name:'Neenah Paper Inc', market:'NYSE', currency:'USD', price:31.39},
        13590: {id:13590, symbol:'PII', name:'Polaris Industries Inc', market:'NYSE', currency:'GBP', price:145.64},
        13620: {id:13620, symbol:'SDLP', name:'Seadrill Partners LLC', market:'NYSE', currency:'EUR', price:28.8},
        13680: {id:13680, symbol:'SCSC', name:'ScanSource', market:'NASDAQ', currency:'HKD', price:32.51},
        13890: {id:13890, symbol:'URS', name:'Urs Corp', market:'NYSE', currency:'RMB', price:48.47},
        13920: {id:13920, symbol:'SBBX', name:'Sussex Bancorp', market:'NASDAQ', currency:'USD', price:6.54},
        13980: {id:13980, symbol:'PFPT', name:'Proofpoint Inc', market:'NASDAQ', currency:'GBP', price:20.12},
        14010: {id:14010, symbol:'SUMR', name:'Summer Infant Inc', market:'NASDAQ', currency:'EUR', price:3.35},
        14130: {id:14130, symbol:'YONG', name:'Yongye International, Inc', market:'NASDAQ', currency:'HKD', price:5.32},
        14220: {id:14220, symbol:'NICK', name:'Nicholas Financial Inc', market:'NASDAQ', currency:'RMB', price:14.69},
        14280: {id:14280, symbol:'STT', name:'State Street Corp', market:'NYSE', currency:'USD', price:66.31},
        14340: {id:14340, symbol:'PERY', name:'Perry Ellis International Inc', market:'NASDAQ', currency:'GBP', price:21.56},
        14460: {id:14460, symbol:'STN', name:'Stantec', market:'NYSE', currency:'EUR', price:62},
        14490: {id:14490, symbol:'Y', name:'Alleghany Corp', market:'NYSE', currency:'HKD', price:399.96},
        14730: {id:14730, symbol:'RUK', name:'Reed Elsevier ADR repsg 4 Ord Shs', market:'NYSE', currency:'RMB', price:45.59},
        14760: {id:14760, symbol:'PDLI', name:'PDL Biopharma Inc', market:'NASDAQ', currency:'USD', price:8.06},
        14820: {id:14820, symbol:'UCTT', name:'Ultra Clean Holdings Inc', market:'NASDAQ', currency:'GBP', price:5.82},
        14940: {id:14940, symbol:'UBSH', name:'Union First Market Bankshares Corp', market:'NASDAQ', currency:'EUR', price:20.3},
        15150: {id:15150, symbol:'WTW', name:'Weight Watchers International Inc', market:'NYSE', currency:'HKD', price:45.56},
        15390: {id:15390, symbol:'PBMD', name:'Prima BioMed Ltd', market:'NASDAQ', currency:'RMB', price:2.3},
        15540: {id:15540, symbol:'TUES', name:'Tuesday Morning Corp', market:'NASDAQ', currency:'USD', price:9.18},
        15570: {id:15570, symbol:'RNST', name:'Renasant Corp', market:'NASDAQ', currency:'GBP', price:24.52},
        15630: {id:15630, symbol:'RNN', name:'Rexahn Pharmaceuticals Inc', market:'AMEX', currency:'EUR', price:0.33},
        15690: {id:15690, symbol:'WLB', name:'Westmoreland Coal Ord Shs', market:'NASDAQ', currency:'HKD', price:12.25},
        15810: {id:15810, symbol:'RMGN', name:'SCG Financial Acquisition Corp', market:'NASDAQ', currency:'RMB', price:11.22},
        15900: {id:15900, symbol:'SPB', name:'Spectrum Brands Holdings Inc', market:'NYSE', currency:'USD', price:61.16},
        15990: {id:15990, symbol:'WEBM', name:'WebMediaBrands Inc', market:'NASDAQ', currency:'GBP', price:1.21},
        16200: {id:16200, symbol:'SNN', name:'Smith & Nephew ADR Reptg 5 Ord Shs', market:'NYSE', currency:'EUR', price:57.89},
        16290: {id:16290, symbol:'WAB', name:'Wabtec', market:'NYSE', currency:'HKD', price:74.27},
        16470: {id:16470, symbol:'VSR', name:'Versar Inc', market:'AMEX', currency:'RMB', price:4.28},
        16740: {id:16740, symbol:'RATE', name:'Bankrate Inc', market:'NYSE', currency:'USD', price:13.91},
        16770: {id:16770, symbol:'VOD', name:'Vodafone Group ADR Reptg 10 Ord Shs', market:'NASDAQ', currency:'GBP', price:28.84},
        16860: {id:16860, symbol:'VMW', name:'VMware Inc', market:'NYSE', currency:'EUR', price:89.71},
        17220: {id:17220, symbol:'QBC', name:'Cubic Energy Inc', market:'AMEX', currency:'HKD', price:0.34},
        17250: {id:17250, symbol:'VG', name:'Vonage Holdings Corp', market:'NYSE', currency:'RMB', price:2.76},
        17370: {id:17370, symbol:'THO', name:'Thor Industries Inc', market:'NYSE', currency:'USD', price:55.23},
        17430: {id:17430, symbol:'THC', name:'Tenet Healthcare Corp', market:'NYSE', currency:'GBP', price:47.04},
        17460: {id:17460, symbol:'VASC', name:'Vascular Solutions Inc', market:'NASDAQ', currency:'EUR', price:15.6},
        17490: {id:17490, symbol:'VALU', name:'Value Line Inc', market:'NASDAQ', currency:'HKD', price:9.01},
        17700: {id:17700, symbol:'USTR', name:'United Stationers Inc', market:'NASDAQ', currency:'RMB', price:34.5},
        17760: {id:17760, symbol:'TECUA', name:'Tecumseh Products Co', market:'NASDAQ', currency:'USD', price:9.25},
        17880: {id:17880, symbol:'PTEN', name:'Patterson-UTI Energy Inc', market:'NASDAQ', currency:'GBP', price:25.32},
        17970: {id:17970, symbol:'SEE', name:'Sealed Air Corp', market:'NYSE', currency:'EUR', price:24.52},
        18060: {id:18060, symbol:'SYNL', name:'Synalloy Corp', market:'NASDAQ', currency:'HKD', price:14.79}
    };



    window.StockService = {
        search: search,
        addToPortfolio: addToPortfolio,
        streamUpdates: streamUpdates
    };
})();
