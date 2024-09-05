[{
  $match: {
    favoriteFruit: "strawberry",
    eyeColor: "blue",
    gender:"female"
  }
},{
  $project: {
    name:1,
    age:1
  }
},{
  $group: {
    _id: "$age",
    tempcount:{
      $sum:1
    }
    
    
  }
},{
  $sort: {
    tempcount: -1,
}
}
  
]

///////////////////////////

[{
  $unwind: {
    path: "$tags",
    
  }
},{
  $group: {
    _id: "$_id",  //if you want to find the name then you have to group by name
    tagCount:{
      $sum:1
    }
  }
},{
  $group: {
    _id: null,
    averageTagCount:{
      $avg:"$tagCount"
    }
  }
}
]


# take the average count of tags for specified set of users

[{
  $match: {
    eyeColor: "blue",
    favoriteFruit: "apple",
    gender:"male"
    
  }
},{
  $unwind: {
    path: "$tags"
  }
},{
  $group: {
    _id: "$_id",
    tagCount:{
      $sum:1
    }
  }
},{
  $group: {
    _id: null,   //COnsider one user not specified
    avgCount: {
      $avg: "$tagCount"
    }
  }
}]


## call the attribute inside a object
[
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  }, {
    $sort: {
      userCount: -1
    }
  }
]

# regular expression  (LIKE in SQL)

[
  {
    $match: {
      "company.phone": {
        $regex: /^\+1 \(940/,
      },
    },
  },
]

## 
[
  {
    $match: {
      "company.location.country": "USA",
      isActive: false,
      favoriteFruit: "banana",
      "company.phone": {
        $regex: /^\+1 \(940/,
      },
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
]


# $all behave as AND operator
[
  {
    $match: {
      tags: {
        $all: ["id","ad"],
      },
    },
  },
]