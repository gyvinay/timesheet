import React, { useEffect, useRef, useState } from "react";
import { Scheduler } from "./lib";
import { ProcessedEvent, SchedulerRef } from "./lib/types";

function App() {
  const calendarRef = useRef<SchedulerRef>(null);
  const [scrollToCurrentTime, setScrollToCurrentTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScrollToCurrentTime(false);
      setTimeout(() => {
        setScrollToCurrentTime(true);
      }, 90000);
    }, 5000);
  }, []);

  const eList3005 = [
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | R&D Daily Attendance | Microsoft Teams",
      id: "66f0eb04eaf5c2799a4e3ecc",
      eventId: "1674",
      start: "2024-09-26T04:09:15Z",
      duration: 57.959,
      end: "2024-09-26T04:10:13Z",
      timestamp: "2024-09-26T04:09:15Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | R&D Daily Attendance | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "gitlab - zkteco",
      },
      title:
        "send activation mail for users(new & existing) based on email verified value (!192) · Merge requests · MinervaIoT Platform / Applications / Ralvie / Ralvie Server · GitLab - Google Chrome",
      id: "66f0ec32eaf5c2799a4e3f1a",
      eventId: "1689",
      start: "2024-09-26T04:14:52Z",
      duration: 45.167,
      end: "2024-09-26T04:15:37Z",
      timestamp: "2024-09-26T04:14:52Z",
      hidden: false,
      data: {
        app: "gitlab - zkteco",
        title:
          "send activation mail for users(new & existing) based on email verified value (!192) · Merge requests · MinervaIoT Platform / Applications / Ralvie / Ralvie Server · GitLab - Google Chrome",
        url: "gitlab.zkteco.com/miverraiot-platform/applications/ralvie/ralvie-server/-/merge_requests/192/diffs",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "SpringToolSuite4",
      },
      title: "master - Spring Tool Suite 4",
      id: "66f0ec32eaf5c2799a4e3f1b",
      eventId: "1700",
      start: "2024-09-26T04:16:55Z",
      duration: 91.13,
      end: "2024-09-26T04:18:26Z",
      timestamp: "2024-09-26T04:16:55Z",
      hidden: false,
      data: {
        app: "SpringToolSuite4",
        title: "master - Spring Tool Suite 4",
        application: "SpringToolSuite4.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ralvie-client",
      },
      title: "Welcome - ralvie-client - Visual Studio Code",
      id: "66f0ee8ceaf5c2799a4e3fc8",
      eventId: "1716",
      start: "2024-09-26T04:25:49Z",
      duration: 40.769,
      end: "2024-09-26T04:26:30Z",
      timestamp: "2024-09-26T04:25:49Z",
      hidden: false,
      data: {
        app: "ralvie-client",
        title: "Welcome - ralvie-client - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "zkteco - atlassian",
      },
      title: "RC board - Backlog - ZKTeco - Google Chrome",
      id: "66f0ee8ceaf5c2799a4e3fc9",
      eventId: "1728",
      start: "2024-09-26T04:27:39Z",
      duration: 45.054,
      end: "2024-09-26T04:28:24Z",
      timestamp: "2024-09-26T04:27:39Z",
      hidden: false,
      data: {
        app: "zkteco - atlassian",
        title: "RC board - Backlog - ZKTeco - Google Chrome",
        url: "zkteco.atlassian.net/jira/software/c/projects/RC/boards/701/backlog",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "msedge",
      },
      title: "Developer Portal - Profile 1 - Microsoft​ Edge",
      id: "66f0efb9eaf5c2799a4e401d",
      eventId: "1736",
      start: "2024-09-26T04:29:56Z",
      duration: 44.437,
      end: "2024-09-26T04:30:40Z",
      timestamp: "2024-09-26T04:29:56Z",
      hidden: false,
      data: {
        app: "msedge",
        title: "Developer Portal - Profile 1 - Microsoft​ Edge",
        application: "msedge.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "msedge",
      },
      title: "Developer Portal - Profile 1 - Microsoft​ Edge",
      id: "66f0efb9eaf5c2799a4e401e",
      eventId: "1739",
      start: "2024-09-26T04:30:59Z",
      duration: 64.708,
      end: "2024-09-26T04:32:04Z",
      timestamp: "2024-09-26T04:30:59Z",
      hidden: false,
      data: {
        app: "msedge",
        title: "Developer Portal - Profile 1 - Microsoft​ Edge",
        application: "msedge.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "msedge",
      },
      title: "Developer Portal and 1 more page - Profile 1 - Microsoft​ Edge",
      id: "66f0f0e6eaf5c2799a4e406e",
      eventId: "1763",
      start: "2024-09-26T04:35:01Z",
      duration: 38.405,
      end: "2024-09-26T04:35:39Z",
      timestamp: "2024-09-26T04:35:01Z",
      hidden: false,
      data: {
        app: "msedge",
        title: "Developer Portal and 1 more page - Profile 1 - Microsoft​ Edge",
        application: "msedge.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "notepad++",
      },
      title: "*new 92 - Notepad++",
      id: "66f0f0e6eaf5c2799a4e406f",
      eventId: "1770",
      start: "2024-09-26T04:36:25Z",
      duration: 30.316,
      end: "2024-09-26T04:36:55Z",
      timestamp: "2024-09-26T04:36:25Z",
      hidden: false,
      data: {
        app: "notepad++",
        title: "*new 92 - Notepad++",
        application: "notepad++.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "gitlab - zkteco",
      },
      title:
        "src/main/java/com/zkteco/minervaiot/cloudaccess/helper/authorization/AuthorizationApiIntegration.java · 1.0.2_R · MinervaIoT Platform / Applications / cloud-access · GitLab - Google Chrome",
      id: "66f0f212eaf5c2799a4e40bf",
      eventId: "1798",
      start: "2024-09-26T04:41:13Z",
      duration: 40.25,
      end: "2024-09-26T04:41:53Z",
      timestamp: "2024-09-26T04:41:13Z",
      hidden: false,
      data: {
        app: "gitlab - zkteco",
        title:
          "src/main/java/com/zkteco/minervaiot/cloudaccess/helper/authorization/AuthorizationApiIntegration.java · 1.0.2_R · MinervaIoT Platform / Applications / cloud-access · GitLab - Google Chrome",
        url: "gitlab.zkteco.com/miverraiot-platform/applications/cloudaccess/-/blob/1.0.2_R/src/main/java/com/zkteco/minervaiot/cloudaccess/helper/authorization/AuthorizationApiIntegration.java",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Postman",
      },
      title: "password grant - My Workspace",
      id: "66f0f33feaf5c2799a4e410d",
      eventId: "1815",
      start: "2024-09-26T04:44:20Z",
      duration: 39.378,
      end: "2024-09-26T04:44:59Z",
      timestamp: "2024-09-26T04:44:20Z",
      hidden: false,
      data: {
        app: "Postman",
        title: "password grant - My Workspace",
        application: "Postman.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Postman",
      },
      title: "password grant - My Workspace",
      id: "66f0f33feaf5c2799a4e410e",
      eventId: "1818",
      start: "2024-09-26T04:46:58Z",
      duration: 33.336,
      end: "2024-09-26T04:47:31Z",
      timestamp: "2024-09-26T04:46:58Z",
      hidden: false,
      data: {
        app: "Postman",
        title: "password grant - My Workspace",
        application: "Postman.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "accounts - google",
      },
      title: "Create your Google Account - Google Chrome",
      id: "66f0f46beaf5c2799a4e415e",
      eventId: "1834",
      start: "2024-09-26T04:49:23Z",
      duration: 35.956,
      end: "2024-09-26T04:49:59Z",
      timestamp: "2024-09-26T04:49:23Z",
      hidden: false,
      data: {
        app: "accounts - google",
        title: "Create your Google Account - Google Chrome",
        url: "accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail&ddm=0&dsh=S-1642366435:1727066957357656&ec=GAlAFw&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&service=mail&TL=APps6eY0oErLU4gKHfEKMqT-WDqf8fUQFuRjpfwiP11ckSMyte7HOyBvKKbNuAuM",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "SOS - All Teams | Microsoft Teams",
      id: "66f0f46beaf5c2799a4e415f",
      eventId: "1836",
      start: "2024-09-26T04:50:07Z",
      duration: 52.591,
      end: "2024-09-26T04:51:00Z",
      timestamp: "2024-09-26T04:50:07Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "SOS - All Teams | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "mail - google",
      },
      title: "Verify OTP - sundialdemo@gmail.com - Gmail - Google Chrome",
      id: "66f0f6c4eaf5c2799a4e420e",
      eventId: "1901",
      start: "2024-09-26T04:59:29Z",
      duration: 37.956,
      end: "2024-09-26T05:00:07Z",
      timestamp: "2024-09-26T04:59:29Z",
      hidden: false,
      data: {
        app: "mail - google",
        title: "Verify OTP - sundialdemo@gmail.com - Gmail - Google Chrome",
        url: "mail.google.com/mail/u/1/#inbox/FMfcgzQXJGtlhpFVkbMJtVFjHPjxQFsr",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "mail - google",
      },
      title: "Verify OTP - sundialdemo@gmail.com - Gmail - Google Chrome",
      id: "66f0f6c4eaf5c2799a4e420f",
      eventId: "1905",
      start: "2024-09-26T05:00:29Z",
      duration: 246.285,
      end: "2024-09-26T05:04:35Z",
      timestamp: "2024-09-26T05:00:29Z",
      hidden: false,
      data: {
        app: "mail - google",
        title: "Verify OTP - sundialdemo@gmail.com - Gmail - Google Chrome",
        url: "mail.google.com/mail/u/1/#inbox/FMfcgzQXJGtlhpFVkbMJtVFjHPjxQFsr",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "IntelliJ IDEA",
      },
      title: "IntelliJ IDEA",
      id: "66f0f733eaf5c2799a4e4221",
      eventId: "1277",
      start: "2024-09-26T05:01:03Z",
      duration: 109.085,
      end: "2024-09-26T05:02:52Z",
      timestamp: "2024-09-26T05:01:03Z",
      hidden: false,
      data: {
        app: "IntelliJ IDEA",
        title: "IntelliJ IDEA",
        application: "IntelliJ IDEA",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Untitled",
      },
      title: "Untitled",
      id: "66f0f733eaf5c2799a4e4222",
      eventId: "1279",
      start: "2024-09-26T05:02:52Z",
      duration: 32.747,
      end: "2024-09-26T05:03:25Z",
      timestamp: "2024-09-26T05:02:52Z",
      hidden: false,
      data: {
        app: "Untitled",
        title: "Untitled",
        url: "http://localhost:3000/",
        application: "Safari",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ralvie-frontend [Jenkins]",
      },
      title: "ralvie-frontend [Jenkins] - Google Chrome",
      id: "66f0f7f1eaf5c2799a4e4257",
      eventId: "1913",
      start: "2024-09-26T05:06:01Z",
      duration: 314.169,
      end: "2024-09-26T05:11:15Z",
      timestamp: "2024-09-26T05:06:01Z",
      hidden: false,
      data: {
        app: "ralvie-frontend [Jenkins]",
        title: "ralvie-frontend [Jenkins] - Google Chrome",
        url: "10.10.10.132:8080/view/Internal-Server/job/ralvie-frontend/",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie",
      id: "66f0f860eaf5c2799a4e4270",
      eventId: "1283",
      start: "2024-09-26T05:07:05Z",
      duration: 198.512,
      end: "2024-09-26T05:10:24Z",
      timestamp: "2024-09-26T05:07:05Z",
      hidden: false,
      data: {
        app: "Ralvie",
        url: "http://localhost:3000/",
        title: "Ralvie",
        application: "Safari",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Ralvie Internal | Microsoft Teams",
      id: "66f0fa4aeaf5c2799a4e42f0",
      eventId: "1924",
      start: "2024-09-26T05:18:03Z",
      duration: 121.593,
      end: "2024-09-26T05:20:05Z",
      timestamp: "2024-09-26T05:18:03Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Ralvie Internal | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ralvie-frontend [Jenkins]",
      },
      title: "ralvie-frontend [Jenkins] - Google Chrome",
      id: "66f0fb76eaf5c2799a4e433f",
      eventId: "1926",
      start: "2024-09-26T05:20:24Z",
      duration: 176.965,
      end: "2024-09-26T05:23:21Z",
      timestamp: "2024-09-26T05:20:24Z",
      hidden: false,
      data: {
        app: "ralvie-frontend [Jenkins]",
        title: "ralvie-frontend [Jenkins] - Google Chrome",
        url: "10.10.10.132:8080/view/Internal-Server/job/ralvie-frontend/",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Postman",
      },
      title: "password grant - My Workspace",
      id: "66f0fca3eaf5c2799a4e4387",
      eventId: "1928",
      start: "2024-09-26T05:23:29Z",
      duration: 31.352,
      end: "2024-09-26T05:24:00Z",
      timestamp: "2024-09-26T05:23:29Z",
      hidden: false,
      data: {
        app: "Postman",
        title: "password grant - My Workspace",
        application: "Postman.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "accounts - google",
      },
      title: "Sign in - Google Accounts - Google Chrome",
      id: "66f0fca3eaf5c2799a4e4388",
      eventId: "1941",
      start: "2024-09-26T05:25:30Z",
      duration: 34.625,
      end: "2024-09-26T05:26:05Z",
      timestamp: "2024-09-26T05:25:30Z",
      hidden: false,
      data: {
        app: "accounts - google",
        title: "Sign in - Google Accounts - Google Chrome",
        url: "accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S-1157432881%3A1727069059363265&client_id=52927544736-ijs9e0u6sbalmnpo8u20dn4q6muo99np.apps.googleusercontent.com&ddm=0&nonce=Ef04YbUJdJ1YQy9RmvsQHuCT3MdFIuWf6H1oXTIOuTA&o2v=2&redirect_uri=https%3A%2F%2Fauthorization.minervaiotdev.com%2Foauth2LoginSuccessCallBack%2Fgoogle&response_type=code&scope=profile+email+openid&service=lso&state=8zHB02ZIxJCro_tLz--pvZMmJkyXa0-9JY71jAFZYF8%3D&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMMXIcfcQrsdj2WFZK-A5OV_7gvzW0JTnvGkzs6NqqR6s8a2yhdFN5XJtb4FEiVIdzQYuPKp29gc_xm5keftfb1ZrxjCJhI5jnhAMNOcFdjeQte4nNIHrc8TaICs-qehza0F6sRwrvTWYd3ggTh0ONBeX8a9OeXNjfA10GGT_DELxfWQodYTfu8f8f8m-GgF_fPSVTaX47Qrz5yx-ALvcMa0uvIzrXGfxmpFi7dujNtMX-OVCIjBs5aVXhhCQVPbtiL2SSbIWi9HdspYBONOPI6bzNDlSwBJCuly8vBuKC0p2fSs_yihbb-Lse27AL3GBjYWfX-dbMjVMHD0FqnANKZemXXhV5wWMHx7W6vO7chGMpmW6CiBiAXjIDHq1qYQcVVp662Ro4utUaloR6iDY6lcNhzpoHAo0ggjQb5se4jzwpz0CJS0UDrBGRm99L8Ley_VP7hvL0gwnE0rDJXR_IAX4_-4rhj-ssh4VY-OujT4BV5RiQ%26flowName%3DGeneralOAuthFlow%26as%3DS-1157432881%253A1727069059363265%26client_id%3D52927544736-ijs9e0u6sbalmnpo8u20dn4q6muo99np.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fauthorization.minervaiotdev.com&rart=ANgoxccE3yGwMXZQYgrH1-vXFwxRPKsJRGqmjWOCCtY69P5ipP3z8e_2zXDtUU58n7vTPsX0tGfawKCsR1OhS3E4orlUt4NNfU1T9EUMCie9L-wpnFyxUzk",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Postman",
      },
      title: "password grant - My Workspace",
      id: "66f0fca3eaf5c2799a4e4389",
      eventId: "1942",
      start: "2024-09-26T05:26:12Z",
      duration: 44.448,
      end: "2024-09-26T05:26:56Z",
      timestamp: "2024-09-26T05:26:12Z",
      hidden: false,
      data: {
        app: "Postman",
        title: "password grant - My Workspace",
        application: "Postman.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "zkteco - atlassian",
      },
      title: "sdajfhkjsadfkjsdhakfj",
      id: "66f0fca3eaf5c2799a4e438a",
      eventId: "1947",
      start: "2024-09-26T05:27:09Z",
      duration: 79.502,
      end: "2024-09-26T05:28:29Z",
      timestamp: "2024-09-26T05:27:09Z",
      hidden: false,
      data: {
        app: "zkteco - atlassian",
        title: "hsfgkjdsfhgfdkj",
        url: "zkteco.atlassian.net/browse/RC-345",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Chethan H | Microsoft Teams",
      id: "66f0fca3eaf5c2799a4e438b",
      eventId: "1948",
      start: "2024-09-26T05:28:30Z",
      duration: 116.574,
      end: "2024-09-26T05:30:27Z",
      timestamp: "2024-09-26T05:28:30Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Chethan H | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "gitlab - zkteco",
      },
      title:
        "Commits · nmbrsystems · MinervaIoT Platform / Applications / Ralvie / Ralvie Client · GitLab - Google Chrome",
      id: "66f0fdcfeaf5c2799a4e43d1",
      eventId: "1953",
      start: "2024-09-26T05:30:37Z",
      duration: 115.884,
      end: "2024-09-26T05:32:33Z",
      timestamp: "2024-09-26T05:30:37Z",
      hidden: false,
      data: {
        app: "gitlab - zkteco",
        title:
          "Commits · nmbrsystems · MinervaIoT Platform / Applications / Ralvie / Ralvie Client · GitLab - Google Chrome",
        url: "gitlab.zkteco.com/miverraiot-platform/applications/ralvie/ralvie-client/-/commits/nmbrsystems/",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "zkteco - atlassian",
      },
      title: "oiouoiuiuyuyttyt",
      id: "66f10733eaf5c2799a4e45b9",
      eventId: "1974",
      start: "2024-09-26T06:09:10Z",
      duration: 353.261,
      end: "2024-09-26T06:15:03Z",
      timestamp: "2024-09-26T06:09:10Z",
      hidden: false,
      data: {
        app: "zkteco - atlassian",
        title: "kkklkjhsjdf",
        url: "zkteco.atlassian.net/browse/RC-345",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "draw.io",
      },
      title: "Untitled Diagram.drawio - draw.io",
      id: "66f10860eaf5c2799a4e460c",
      eventId: "1982",
      start: "2024-09-26T06:16:54Z",
      duration: 66.905,
      end: "2024-09-26T06:18:01Z",
      timestamp: "2024-09-26T06:16:54Z",
      hidden: false,
      data: {
        app: "draw.io",
        title: "Untitled Diagram.drawio - draw.io",
        application: "draw.io.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Mota Gnanendra Reddy | Microsoft Teams",
      id: "66f10860eaf5c2799a4e460d",
      eventId: "1983",
      start: "2024-09-26T06:18:02Z",
      duration: 56.656,
      end: "2024-09-26T06:18:59Z",
      timestamp: "2024-09-26T06:18:02Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Mota Gnanendra Reddy | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Mota Gnanendra Reddy | Microsoft Teams",
      id: "66f1098ceaf5c2799a4e4658",
      eventId: "1992",
      start: "2024-09-26T06:19:36Z",
      duration: 154.25,
      end: "2024-09-26T06:22:10Z",
      timestamp: "2024-09-26T06:19:36Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Mota Gnanendra Reddy | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Ralvie Internal | Microsoft Teams",
      id: "66f1098ceaf5c2799a4e4659",
      eventId: "1998",
      start: "2024-09-26T06:23:35Z",
      duration: 81.223,
      end: "2024-09-26T06:24:56Z",
      timestamp: "2024-09-26T06:23:35Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Ralvie Internal | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Ann Mary Babu | Microsoft Teams",
      id: "66f10ab9eaf5c2799a4e46b4",
      eventId: "2007",
      start: "2024-09-26T06:27:02Z",
      duration: 124.803,
      end: "2024-09-26T06:29:07Z",
      timestamp: "2024-09-26T06:27:02Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Ann Mary Babu | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Activity | Ralvie Internal | Microsoft Teams",
      id: "66f10be6eaf5c2799a4e471b",
      eventId: "2010",
      start: "2024-09-26T06:29:14Z",
      duration: 144.084,
      end: "2024-09-26T06:31:38Z",
      timestamp: "2024-09-26T06:29:14Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Activity | Ralvie Internal | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie - Google Chrome",
      id: "66f10be6eaf5c2799a4e471c",
      eventId: "2020",
      start: "2024-09-26T06:32:29Z",
      duration: 38.7,
      end: "2024-09-26T06:33:08Z",
      timestamp: "2024-09-26T06:32:29Z",
      hidden: false,
      data: {
        app: "Ralvie",
        title: "Ralvie - Google Chrome",
        url: "localhost:3000",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "MongoDBCompass",
      },
      title: "MongoDB Compass",
      id: "66f10d12eaf5c2799a4e4776",
      eventId: "2025",
      start: "2024-09-26T06:34:09Z",
      duration: 46.487,
      end: "2024-09-26T06:34:55Z",
      timestamp: "2024-09-26T06:34:09Z",
      hidden: false,
      data: {
        app: "MongoDBCompass",
        title: "MongoDB Compass",
        application: "MongoDBCompass.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "xd - adobe",
      },
      title: "Ralvie - Version 1.0.0 - All in One - Vendor - Google Chrome",
      id: "66f10d12eaf5c2799a4e4777",
      eventId: "2029",
      start: "2024-09-26T06:35:08Z",
      duration: 43.428,
      end: "2024-09-26T06:35:51Z",
      timestamp: "2024-09-26T06:35:08Z",
      hidden: false,
      data: {
        app: "xd - adobe",
        title: "Ralvie - Version 1.0.0 - All in One - Vendor - Google Chrome",
        url: "xd.adobe.com/view/4c93d2a3-665c-43e7-8672-e97823822d93-19c0/flow/",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "xd - adobe",
      },
      title: "Ralvie - Version 1.0.0 - All in One - Vendor - Google Chrome",
      id: "66f10d12eaf5c2799a4e4778",
      eventId: "2030",
      start: "2024-09-26T06:36:10Z",
      duration: 36.796,
      end: "2024-09-26T06:36:47Z",
      timestamp: "2024-09-26T06:36:10Z",
      hidden: false,
      data: {
        app: "xd - adobe",
        title: "Ralvie - Version 1.0.0 - All in One - Vendor - Google Chrome",
        url: "xd.adobe.com/view/4c93d2a3-665c-43e7-8672-e97823822d93-19c0/flow/",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Teams and Channels | General | Microsoft Teams",
      id: "66f10d12eaf5c2799a4e4779",
      eventId: "2037",
      start: "2024-09-26T06:37:33Z",
      duration: 72.842,
      end: "2024-09-26T06:38:46Z",
      timestamp: "2024-09-26T06:37:33Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Teams and Channels | General | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ralvie-client",
      },
      title: "Day.js - ralvie-client - Visual Studio Code",
      id: "66f10e3feaf5c2799a4e47d0",
      eventId: "2046",
      start: "2024-09-26T06:40:00Z",
      duration: 32.483,
      end: "2024-09-26T06:40:32Z",
      timestamp: "2024-09-26T06:40:00Z",
      hidden: false,
      data: {
        app: "ralvie-client",
        title: "Day.js - ralvie-client - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "olk",
      },
      title: "Mail - Vinay G.Y - Outlook",
      id: "66f10e3feaf5c2799a4e47d1",
      eventId: "2047",
      start: "2024-09-26T06:40:33Z",
      duration: 30.328,
      end: "2024-09-26T06:41:03Z",
      timestamp: "2024-09-26T06:40:33Z",
      hidden: false,
      data: {
        app: "olk",
        title: "Mail - Vinay G.Y - Outlook",
        application: "olk.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie - Google Chrome",
      id: "66f10e3feaf5c2799a4e47d2",
      eventId: "2050",
      start: "2024-09-26T06:41:20Z",
      duration: 40.093,
      end: "2024-09-26T06:42:00Z",
      timestamp: "2024-09-26T06:41:20Z",
      hidden: false,
      data: {
        app: "Ralvie",
        title: "Ralvie - Google Chrome",
        url: "14.97.160.178:9011/tags",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ralvie-client",
      },
      title: "Activity.js - ralvie-client - Visual Studio Code",
      id: "66f10e3feaf5c2799a4e47d3",
      eventId: "2054",
      start: "2024-09-26T06:42:53Z",
      duration: 39.394,
      end: "2024-09-26T06:43:32Z",
      timestamp: "2024-09-26T06:42:53Z",
      hidden: false,
      data: {
        app: "ralvie-client",
        title: "Activity.js - ralvie-client - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "ms-teams",
      },
      title: "Chat | Ralvie & NMBR UI Project. | Microsoft Teams",
      id: "66f10f6beaf5c2799a4e4830",
      eventId: "2057",
      start: "2024-09-26T06:43:56Z",
      duration: 34.385,
      end: "2024-09-26T06:44:30Z",
      timestamp: "2024-09-26T06:43:56Z",
      hidden: false,
      data: {
        app: "ms-teams",
        title: "Chat | Ralvie & NMBR UI Project. | Microsoft Teams",
        application: "ms-teams.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie - Google Chrome",
      id: "66f10f6beaf5c2799a4e4831",
      eventId: "2060",
      start: "2024-09-26T06:44:33Z",
      duration: 58.874,
      end: "2024-09-26T06:45:32Z",
      timestamp: "2024-09-26T06:44:33Z",
      hidden: false,
      data: {
        app: "Ralvie",
        title: "Ralvie - Google Chrome",
        url: "localhost:3000/timesheet",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie - Google Chrome",
      id: "66f10f6beaf5c2799a4e4832",
      eventId: "2073",
      start: "2024-09-26T06:48:37Z",
      duration: 265.308,
      end: "2024-09-26T06:53:02Z",
      timestamp: "2024-09-26T06:48:37Z",
      hidden: false,
      data: {
        app: "Ralvie",
        title: "Ralvie - Google Chrome",
        url: "localhost:3000/timesheet",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "daybrush",
      },
      title: "Selecto - Select in the scroll area. ⋅ Storybook - Google Chrome",
      id: "66f11098eaf5c2799a4e4891",
      eventId: "2077",
      start: "2024-09-26T06:53:15Z",
      duration: 90.792,
      end: "2024-09-26T06:54:46Z",
      timestamp: "2024-09-26T06:53:15Z",
      hidden: false,
      data: {
        app: "daybrush",
        title: "Selecto - Select in the scroll area. ⋅ Storybook - Google Chrome",
        url: "daybrush.com/selecto/storybook/?path=/story/selecto--select-in-the-scroll-area",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "daybrush",
      },
      title:
        "Selecto with Infinite Viewer - Select in the Infinite Scroll Viewer. ⋅ Storybook - Google Chrome",
      id: "66f111c5eaf5c2799a4e48fb",
      eventId: "2078",
      start: "2024-09-26T06:54:53Z",
      duration: 77.021,
      end: "2024-09-26T06:56:10Z",
      timestamp: "2024-09-26T06:54:53Z",
      hidden: false,
      data: {
        app: "daybrush",
        title:
          "Selecto with Infinite Viewer - Select in the Infinite Scroll Viewer. ⋅ Storybook - Google Chrome",
        url: "daybrush.com/selecto/storybook/?path=/story/selecto-with-infinite-viewer--infinite-viewer",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "Ralvie",
      },
      title: "Ralvie - Google Chrome",
      id: "66f112f1eaf5c2799a4e4953",
      eventId: "2092",
      start: "2024-09-26T06:58:59Z",
      duration: 44.461,
      end: "2024-09-26T06:59:43Z",
      timestamp: "2024-09-26T06:58:59Z",
      hidden: false,
      data: {
        app: "Ralvie",
        title: "Ralvie - Google Chrome",
        url: "localhost:3000/timesheet",
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f112f1eaf5c2799a4e4954",
      eventId: "2112",
      start: "2024-09-26T07:02:15Z",
      duration: 133.493,
      end: "2024-09-26T07:04:28Z",
      timestamp: "2024-09-26T07:02:15Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f1141eeaf5c2799a4e49aa",
      eventId: "2114",
      start: "2024-09-26T07:04:45Z",
      duration: 35.384,
      end: "2024-09-26T07:05:20Z",
      timestamp: "2024-09-26T07:04:45Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "TodayEvents.tsx - react-scheduler - Visual Studio Code",
      id: "66f1141eeaf5c2799a4e49ab",
      eventId: "2115",
      start: "2024-09-26T07:05:21Z",
      duration: 87.976,
      end: "2024-09-26T07:06:49Z",
      timestamp: "2024-09-26T07:05:21Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "TodayEvents.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f1141eeaf5c2799a4e49ac",
      eventId: "2116",
      start: "2024-09-26T07:06:50Z",
      duration: 94.028,
      end: "2024-09-26T07:08:24Z",
      timestamp: "2024-09-26T07:06:50Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f1141eeaf5c2799a4e49ad",
      eventId: "2118",
      start: "2024-09-26T07:08:34Z",
      duration: 239.586,
      end: "2024-09-26T07:12:34Z",
      timestamp: "2024-09-26T07:08:34Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "chrome",
      },
      title: "DevTools - localhost:3000/timesheet",
      id: "66f1154aeaf5c2799a4e4a00",
      eventId: "2123",
      start: "2024-09-26T07:13:13Z",
      duration: 64.751,
      end: "2024-09-26T07:14:18Z",
      timestamp: "2024-09-26T07:13:13Z",
      hidden: false,
      data: {
        app: "chrome",
        title: "DevTools - localhost:3000/timesheet",
        url: null,
        application: "chrome.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f11677eaf5c2799a4e4a50",
      eventId: "2127",
      start: "2024-09-26T07:15:20Z",
      duration: 33.362,
      end: "2024-09-26T07:15:53Z",
      timestamp: "2024-09-26T07:15:20Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "App.tsx - react-scheduler - Visual Studio Code",
      id: "66f11677eaf5c2799a4e4a51",
      eventId: "2130",
      start: "2024-09-26T07:16:02Z",
      duration: 59.82,
      end: "2024-09-26T07:17:02Z",
      timestamp: "2024-09-26T07:16:02Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "App.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
    {
      source: "SUNDIAL",
      application: {
        name: "react-scheduler",
      },
      title: "Day.tsx - react-scheduler - Visual Studio Code",
      id: "66f11677eaf5c2799a4e4a52",
      eventId: "2131",
      start: "2024-09-26T07:17:03Z",
      duration: 122.833,
      end: "2024-09-26T07:19:06Z",
      timestamp: "2024-09-26T07:17:03Z",
      hidden: false,
      data: {
        app: "react-scheduler",
        title: "Day.tsx - react-scheduler - Visual Studio Code",
        application: "Code.exe",
      },
    },
  ];

  function foramtEvents() {
    const events = eList3005.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    const formatedEvents: ProcessedEvent[] = [];

    events.forEach((e) => {
      const eventStart = new Date(e.timestamp);
      const eventEnd = new Date(e.timestamp);
      eventEnd.setSeconds(eventEnd.getSeconds() + e.duration);
      const newEvent: ProcessedEvent = {
        ...e,
        start: eventStart,
        end: eventEnd,
        event_id: e.id,
        title: e.data.title + e.id,
      };
      formatedEvents.push(newEvent);
    });
    return formatedEvents;
  }

  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(10);

  const handleZoom = (type) => {
    switch (type) {
      case "in": {
        if (step === 30) {
          setStep(15);
        } else if (step === 15) {
          setStep(10);
        } else if (step === 10) {
          setStep(5);
        } else if (step === 5) {
          setStep(1);
        }
        break;
      }
      case "out":
        if (step === 1) {
          setStep(5);
        } else if (step === 5) {
          setStep(10);
        } else if (step === 10) {
          setStep(15);
        } else if (step === 15) {
          setStep(30);
        }
        break;
      default:
        setStep(step);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleZoom("in");
        }}
      >
        change date
      </button>
      <Scheduler
        ref={calendarRef}
        events={foramtEvents()}
        view="day"
        eventWidth={40}
        selectedDate={new Date()}
        day={{
          startHour: 9,
          endHour: 24,
          step: step,
          startMinute: 10,
          scrollToCurrentTime: scrollToCurrentTime,
        }}
      />
    </>
  );
}

export default App;
