function fetchStores(callback){ 
    var result = await fetch(
        "https://overpass-api.de/api/interpreter",
        {
            method: "POST",
            // The body contains the query
            // to understand the query language see "The Programmatic Query Language" on
            // https://wiki.openstreetmap.org/wiki/Overpass_API#The_Programmatic_Query_Language_(OverpassQL)
            body: "data="+ encodeURIComponent(`
                [out:json][timeout:25];
                // fetch area “Schweiz” to search in
                {{geocodeArea:Schweiz}}->.searchArea;
                // gather results
                nwr["shop"="farm"](area.searchArea);
                // print results
                [timeout:90]
                [out:json]
                out geom;
            `)
        },
    ).then(callback);
}
